import { Request, Response } from 'express';

export interface IController {
    handle(req: Request, resp: Response): Promise<void>;
}

export class ConsultaSalaController implements IController {

    public async handle(req: Request, resp: Response): Promise<void> {
        throw new Error('Method not implemented.');
    }
}