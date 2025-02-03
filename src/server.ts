import express, { Express, Request, Response } from "express";
const dotenv = require('dotenv');

import { router } from '../infra/routes/router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});