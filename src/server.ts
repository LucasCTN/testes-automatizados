import express, { Express, Request, Response } from "express";
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

app.get('/professor/salas', (req: Request, res: Response) => {
    res.send({salas: ['sala1', 'sala2', 'sala3']});
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});