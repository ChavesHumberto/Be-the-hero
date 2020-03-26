const express = require('express');//importa o express pra essa variavel "express"
const cors = require('cors');//modulo de segurança
const routes = require('./rotes');//caminho relativo pq é um aquivo e n um modulo


const app = express();// cria a aplicação e guarna na variavel app

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);