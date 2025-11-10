const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar cliente
app.post('/alunosMagll', (req, res) => {
    const { cpf, nome } = req.body;

    const codigoDoMySQL = 'INSERT INTO alunosMagll (id, nome, email, idade, peso, objetivo) VALUES (?, ?, ?, ?, ?, ?)';

    acessaBancoNoServidor.query(codigoDoMySQL, [id, nome, email, idade, peso, objetivo], (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao cadastrar' });
        }
        res.json({ message: 'aluno cadastrado!' });
    });
});

// Listar clientes
app.get('/alunosMagll', (req, res) => {
    const codigoDoMySQL = 'SELECT * FROM alunosMagll';

    acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao buscar' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
