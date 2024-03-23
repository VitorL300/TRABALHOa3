const express = require('express');
const app = express();
const port = 3000

app.post('/users', (req, res) => {
    //logica para cirar usuario
    //...
    res.json({ message: 'Usuario Criado com Sucesso' });
});

app.listen(port, () => {
    console.log(`Servidor Rodando`);
});

