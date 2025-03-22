import { Router } from "express"
import { DidController } from "@controllers/did.controller"
import { DidService } from "@services/did.service"
import { User } from "@entities/User"
import { AppDataSource } from "../../data-source"

const didRouter = Router()
const userRepository = AppDataSource.getRepository(User)
const didService = new DidService(userRepository)
const didController = new DidController(didService)

didRouter.get("/did/generate", didController.generateDID)

didRouter.post("/did/register", didController.registerDid)

didRouter.get("/.well-known/did.json", didController.resolveDIDDoc)

didRouter.get("/did/challenge", didController.requestChallenge)



export { didRouter }