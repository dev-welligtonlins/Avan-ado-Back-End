/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

//callback
const fs = require('fs')
console.log('Primeiro comando.')
fs.readFile('./text.txt', callback)
function callback(err, content){
    if (err) return console.error('erro')
    console.log(String(content))
}
console.log('Segundo comando.')
console.log('Terceiro comando.')

setTimeout(() => (console.log('testando a setTimeout...')), 3000)


console.log('Comando que está após setTimeout.')


function dateAtv() {
    const date = new Date()
    console.log(`Horas:  ${date.getHours()}  Min: ${date.getMinutes()} Sec: ${date.getSeconds()}`)
}

setTimeout(dateAtv, 5000)
setTimeout(dateAtv, 5000)
setTimeout(dateAtv, 5000)

