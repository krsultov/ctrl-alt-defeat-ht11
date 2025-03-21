import { Request, Response } from "express"

export interface DIDDocument {
    "@context": string | string[]
    id: string
    authentication?: Authentication[]
    service?: ServiceEndpoint[]
}

export interface Authentication {
    id: string
    type: string
    publicKey: string
}

export interface ServiceEndpoint {
    id: string
    type: string
    serviceEndpoint: string
}

export interface IDidService {
    generateDID(didUrl: string): Promise<{ did: string; privateKey: string; publicKey: string }>

    resolveDIDDoc(did: string): DIDDocument

    requestChallenge(did: string): Promise<string>
}

export interface IDidController {
    generateDID(req: Request, res: Response): Promise<Response>

    resolveDIDDoc(req: Request, res: Response): Promise<Response>

    requestChallenge(req: Request, res: Response): Promise<Response>
}

export enum IntentId {
    DATA,
    POLLING
}