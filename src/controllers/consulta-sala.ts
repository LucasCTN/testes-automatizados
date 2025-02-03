import { Request, Response } from 'express';

export interface IController {
    handle(req: Request, resp: Response): Promise<void>;
}

export class ConsultaSalaController implements IController {

    public async handle(req: Request, resp: Response): Promise<void> {
        const { valor } = req.params;
        const minha_resposta = {
            salas_disponiveis: [{
                bloco: 'A',
                numero: 100,
                lotacao: 10
            },
            {
                bloco: 'A',
                numero: 101,
                lotacao: 10
            },
            {
                bloco: 'B',
                numero: 209,
                lotacao: 15
            }],
        };
        resp.status(200).json(minha_resposta).end();
    }
}