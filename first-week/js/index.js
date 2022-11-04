//Overview de JavaScript


//console
console.log("texto dentro de um log.")
console.error('Erro: o console identificou falha.')
console.warn('Alerta: risco')


//variáveis
const name = 'welligton'
console.log(name)

let x = 10
if(true){
    let x = 20
}

console.log(x)

//tipos de dados


//string 
const nome = 'joão'
console.log(nome)
console.log(typeof nome)

//number
let n = 10
console.log(n)
console.log(typeof n)
n = 15.99
console.log(n)
console.log(typeof n)

//bool
const isOpen = 1
console.log(isOpen)
console.log(typeof isOpen)

//null
const a = null
console.log(a)
console.log(typeof a)

//undefined
let nada
console.log(nada)
console.log(typeof nada)

//array
const vet = ['C++', 'Java', 1, 'Python', 'JS']
console.log(vet[0])
console.log(typeof vet[1])
console.log(typeof vet[2])

//object literals
const user = {
    username:'ligton',
    password:'123',
    age:31,
    name:'welligton'
}

console.log(user)
console.log(typeof user)

//métodos de string
const text = 'Qualquer um'
console.log(text.length)

//quebrar texto em um conjunto de caracteres
const textToArray = text.split('quer')
console.log(textToArray[1])
console.log(text.toLocaleLowerCase())

 //procurar algo dentro de uma string   -1 quando o pedaço não existe
console.log(text.indexOf('um'))

console.log(text.charAt(text.length -1))
console.log(text.slice(2 ,4))


// mais sobre arrays
const chars = ['A', 'B', 'C' , 'F', 'E']
console.log(chars.length)
console.log(chars[chars.length -1])
chars[5] = 'D'

console.log(chars)
chars.pop()
chars.pop()
console.log(chars)

chars.unshift('B')
console.log(chars)