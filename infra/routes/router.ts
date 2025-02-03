import express, { Express, Request, Response, Router } from "express";
import { factoryConsultaSalaController } from "../factories/factory-controle-consulta-sala";

const router = Router();

const objeto = factoryConsultaSalaController();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

router.get('/professor/salas', (req: Request, res: Response) => {
    res.send(objeto.handle(req, res));
});

export { router };