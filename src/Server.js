const express = require('express');
const router = require('./router'); // Importa o arquivo de rotas

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Usa as rotas definidas no arquivo router.js
app.use('/api', router);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
