import { IDidController, IDidService } from "@interfaces/did.interfaces"
import { Request, Response } from "express"
import { boundMethod } from "autobind-decorator"

export class DidController implements IDidController {
    private didService: IDidService

    constructor(didService: IDidService) {
        this.didService = didService
    }

    async registerDid(req: Request, res: Response) {
        const did = req.body.did as string
        const user = await this.didService.registerDid(did)

        return res.json(user)
    }

    @boundMethod
    async generateDID(req: Request, res: Response) {
        const didUrl = process.env.DID_URL!
        const { did, privateKey, publicKey } = await this.didService.generateDID(didUrl)
        return res.json({ did, privateKey, publicKey })
    }

    @boundMethod
    async resolveDIDDoc(req: Request, res: Response) {
        const fetchedDIDDocument = this.didService.resolveDIDDoc(process.env.DID_URL!)
        return res.json(fetchedDIDDocument)
    }

    @boundMethod
    async requestChallenge(req: Request, res: Response) {
        const did = req.query.did as string;
        const challenge = await this.didService.requestChallenge(did)
        return res.json({ challenge })
    }
}