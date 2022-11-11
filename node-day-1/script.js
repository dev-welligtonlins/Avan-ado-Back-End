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
}); 

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



//utilizando programação síncrona

function sum(success, erro){
  const result = 1+2
  if(result === 2){
    success()
  }else{
    erro()
  }
}


sum(
 () => (console.log('Sucesso! A soma é 2.')) ,
 () => (console.log('A soma não é 2. Algo de errado aconteceu...')) ,
)

console.log('testando exibição.')

//promise - é uma classe
//then()
//resolve e reject


const promise = new Promise((resolv, reject)=> {
  const result = 1+3
  if(result === 2){
    resolv('Sucesso! A soma é 2.')
  }else{
    reject('A soma não é 2. Algo de errado aconteceu...')
  }
})

promise.then(
  ((resultado)=>(console.log(resultado))),
  ((erro)=>(console.log(erro)))
)

//voltando para callback

const name = 'Paulo Sampaio'

function whoIsTheBest(callback, callbackError){
  if(name != 'Paulo Sampaio'){
    callbackError('Tá errado. Não é!')
  }else{
    callback({
      name: name,
      message: `humildemente o melhor`
    })
  }
}

whoIsTheBest( 
  ((success)=>(console.log(`${success.name} é ${success.message}`))),
  ((error)=>(console.log(error))) 
  )

  */

const n = 'Paulo Sampaio'

const p = new Promise((resolve, reject) => {
  if(n != 'Paulo Sampaio'){
    reject('Tá errado. Não é!')
  }else{
    resolve({
      n: n,
      message: `humildemente o melhor`
    })
  }
})