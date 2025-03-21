import { DidService } from "@services/did.service"
import { AppDataSource } from "../../data-source"
import { User } from "@entities/User"
import { Request, Response, NextFunction } from "express"
import redis from "@utils/redis"

const userRepository = AppDataSource.getRepository(User)
const didService = new DidService(userRepository)

export const challengeMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const did = req.query.did as string
    const signedChallenge = req.query.signedChallenge as string

    if (!did) {
        return res.status(400).json({ message: "DID is required" })
    }

    if (!signedChallenge) {
        return res.status(400).json({ message: "Signed challenge is required" })
    }

    const isChallengeValid = await didService.verifyChallenge(did, signedChallenge)

    if (!isChallengeValid) {
        return res.status(400).json({ message: "Invalid signed challenge" })
    }

    await redis.del("challenge:" + did)

    next()
}