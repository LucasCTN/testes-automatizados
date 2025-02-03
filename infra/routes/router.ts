import express, { Express, Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

router.get('/professor/salas', (req: Request, res: Response) => {
    res.send({ salas: ['sala1', 'sala2', 'sala3'] });
});

export { router };