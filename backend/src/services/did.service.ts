import { generateKeyPairSync, randomBytes } from "crypto"
import { Repository } from "typeorm"
import { User } from "@entities/User"
import { DIDDocument, IDidService } from "@interfaces/did.interfaces"
import base58 from "bs58"

export class DidService implements IDidService {
    private readonly userRepository: Repository<User>

    constructor(userRepository: Repository<User>) {
        this.userRepository = userRepository
    }

    async generateDID(didUrl: string): Promise<{ did: string; privateKey: string; publicKey: string }> {
        const { publicKey, privateKey } = generateKeyPairSync("rsa", {
            modulusLength: 4096,
            publicKeyEncoding: { type: "spki", format: "pem" },
            privateKeyEncoding: { type: "pkcs8", format: "pem" }
        })

        const didId = base58.encode(Buffer.from(publicKey.toString(), "utf-8"))

        const did = `did:identiPay:${didUrl}:${didId}`

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
        return challenge
    }
}