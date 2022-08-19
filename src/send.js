const { SerialPort } = require('serialport');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const message = "Enviando dados via serial";

const port = new SerialPort({
    path: 'COM64',
    baudRate: 9600,
})

port.write(message, function(err) {
    if (err) {
        return console.log('Erro: ', err.message);
    }
    console.log("Sucesso")
})

// Possivel conexão com a porta 300
/* app.get('/', (req, res) => {
    return res.json(message)
})

app.listen(3000, () => {
    console.log('Servidor Ativo');
}) */