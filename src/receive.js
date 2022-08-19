const { SerialPort } = require('serialport');

const port = new SerialPort({
    path: 'COM66',
    baudRate: 9600,
});

port.on('open', function() {
    console.log('-- Conexão OK! --');
    port.on('data', function(data) {
        console.log('Recebendo dados: ' + data);
    })
})