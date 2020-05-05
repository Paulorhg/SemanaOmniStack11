const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack',
        aluno: 'Paulo Ricardo'
    })
});

app.listen(3333);