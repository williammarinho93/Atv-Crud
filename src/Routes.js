const express = require('express');
const router = express.Router();

// Array para armazenar as informações das tarefas.



// Exemplo de rota GET
router.get('/items', (req, res) => {
    // Esse espaço você vai colocar o código para listar as tarefas.
    
});

// Exemplo de rota POST
router.post('/items', (req, res) => {
    // Esse espaço você vai colocar o código para criar uma nova tarefa.
    // A tarefa deve conter "name" e "description".
    
});

// Exemplo de rota PUT
router.put('/items/:id', (req, res) => {
    // Esse espaço você vai colocar o código para atualizar a tarefa pelo id.
});

// Exemplo de rota DELETE
router.delete('/items/:id', (req, res) => {
    // Esse espaço você vai colocar o código para deletar a tarefa pelo id.
});

module.exports = router;