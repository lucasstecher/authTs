import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app =  express();
app.get('/', (req, res) => {
    res.send('bem vindo!');
});

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.listen(PORT, () => {
    console.log(`Server running! ${HOSTNAME}:${PORT}`)
});