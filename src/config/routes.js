const express = require('express');
const routes = express.Router();

let db = [
    {'1': {nome: 'Cliente 1', idade: '20'} },
    {'2': {nome: 'Cliente 2', idade: '21'} },
    {'3': {nome: 'Cliente 3', idade: '22'} },
]

routes.get('/', (req, res) => {
    return res.json(db)
});

routes.post('/add', (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).end()
    };

    db.push(body)
    return res.json(body);
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    });

    db = newDB;

    return res.send(newDB);
});

module.exports = routes