import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import exerciceRouter from './routes/exerciceRoutes.js';
import sessionRouter from './routes/sessionRoutes.js';

const app = express();

app.use(express.json());

app.use('/', userRouter);
app.use('/', exerciceRouter);
app.use('/', sessionRouter);


mongoose.connect('mongodb://localhost:27017/postvision');

const port = 4000;

app.listen(port, (err) => {
    if (err) {
        console.error('Erro ao iniciar o servidor: ', err);
    } else {
        console.log(`Servidor rodando em http://localhost:${port}`);
    }
});