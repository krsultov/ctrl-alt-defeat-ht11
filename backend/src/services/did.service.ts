import { generateKeyPairSync, randomBytes } from "crypto"
import { Repository } from "typeorm"
import { User } from "@entities/User"
import { DIDDocument, IDidService } from "@interfaces/did.interfaces"
import base58 from "bs58"
import redis from "@utils/redis"
import * as crypto from "node:crypto"
import { boundMethod } from "autobind-decorator"

export class DidService implements IDidService {
    private readonly userRepository: Repository<User>

    constructor(userRepository: Repository<User>) {
        this.userRepository = userRepository
    }

    @boundMethod
    async registerDid(did: string): Promise<User> {
        const publicKey = base58.decode(did.split(":")[-1].toString()).toString()

        const newUser = this.userRepository.create({
            did,
            status: "pending",
            publicKey: publicKey.toString(),
            metadata: {}
        })

        return this.userRepository.save(newUser)
    }

    @boundMethod
    async generateDID(didUrl: string): Promise<{ did: string; privateKey: string; publicKey: string }> {
        const { publicKey, privateKey } = generateKeyPairSync("rsa", {
            modulusLength: 4096,
            publicKeyEncoding: { type: "spki", format: "pem" },
            privateKeyEncoding: { type: "pkcs8", format: "pem" }
        })

        const didId = base58.encode(Buffer.from(publicKey.toString(), "utf-8"))

        const did = `did:identiPay:${didUrl}:${didId}`

        const user = this.userRepository.create({
            did,
            status: "pending",
            publicKey: publicKey.toString(),
            metadata: {}
        })

        await this.userRepository.save(user)

        return { did, publicKey: publicKey.toString(), privateKey: privateKey.toString() }
    }

    resolveDIDDoc(didUrl: string): DIDDocument {
        return {
            "@context": [
                "https://www.w3.org/ns/did/v1",
                "https://w3id.org/security/suites/ed25519-2020/v1"
            ],
            "id": `did:identiPay:${didUrl}`,
            "service": [
                {
                    "id": `did:identiPay:${didUrl}#challenge`,
                    "type": "ChallengeService",
                    "serviceEndpoint": `http://${didUrl}/did/challenge`
                },
                {
                    "id": `did:identiPay:${didUrl}#transactions`,
                    "type": "TransactionService",
                    "serviceEndpoint": `http://${didUrl}/did/transactions`
                },
                {
                    "id": `did:identiPay:${didUrl}#data`,
                    "type": "DataService",
                    "serviceEndpoint": `http://${didUrl}/did/data`
                }
            ]
        }
    }

    async requestChallenge(did: string): Promise<string> {
        const challenge = randomBytes(128).toString("hex")
        await redis.set("challenge:" + did, challenge, "EX", 120)
        return challenge
    }

    async verifyChallenge(did: string, signedChallenge: string): Promise<boolean> {
        const storedChallenge = await redis.get("challenge:" + did)
        if (!storedChallenge) {
            return false
        }
        const publicKey = base58.decode(did.split(":")[-1].toString()).toString()
        return crypto.verify("rsa", Buffer.from(storedChallenge), publicKey, Buffer.from(signedChallenge))
    }
}