/*
//Overview de JavaScript

//console
console.log("texto dentro de um log.")
console.error('Erro: o console identificou falha.')
console.warn('Alerta: risco')


//variáveis
const nam = 'welligton'
console.log(nam)

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


//object literals

const product = {
    name: 'Camisa',
    price: 29.99,
    inStock: true,
    size: ['p', 'g', 'm'],
    'main color': 'red'
}

console.log(product.price)
console.log(product['price'])
console.log(product['main color'])

//destructuring - desustruturação

let { name, price } = product
console.log(price)
price = 1
console.log(price)

const vector = [3,2,7,45,99]
let [ v1, v2, ...otherVetor] = vector
console.log(otherVetor)


//JSON - JAVASCRIPT OBJECT NOTATION

//criando objeto

const dog = {
    name: 'Scooby',
    age: 10
}

console.log(dog)
const dogJson = JSON.stringify(dog)
console.log(dogJson)
const dogObject = JSON.parse(dogJson)
console.log(dogObject)

const jsonErrado = '{"name" : "welligton", "numero" : "12", "idade" : "22"}'
const jsonErradoObject = JSON.parse(jsonErrado)

//template literals

//////////////////////////////////////////////////////////////////////////////////////
const numeros = [1, 2, 3, 4, 5]

const numerosObj = {
    n1: numeros[0],
    n2: numeros[1],
    n3: numeros[2],
    n4: numeros[3],
    n5: numeros[4]
} 


console.log(numerosObj)

let { n1, n2, n3, n4, n5} = numerosObj

let json = JSON.stringify({n1, n2, n3, n4, n5})
console.log(json)

const numerosObj2 = {
    'numero 1': n1,
    'numero 2': n2,
    'numero 3': n3,
    'numero 4': n4,
    'numero 5': n5,
} 
const jsonNumeros = JSON.stringify(numerosObj2)

console.log(jsonNumeros)



/////////////////////////////////////////////////////

const num1 =10
const num2 =20

const calc = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}
console.log(JSON.stringify(calc))

const a = 5
const b = 10
const out = `Quinze é ${(a+b)} \ne não ${(2*a+b)}.`
console.log(out)

//metodos de arrays

const names = ['welligton', 'priscila', 'yuri', 'Ana']

names.forEach(function(name){
    console.log(name)
})

const modifiedNames = names.map(function(nameAlter){
    if(nameAlter == 'Ana')
        return ('Beatriz')
    else
        return nameAlter
})

modifiedNames.forEach(function(name){
    console.log(name)
})

const numArray = [12, 34, 76, 45, 100, 19, 37, 52].filter(function(num){
    if(num < 50)
        return num
})

numArray.forEach(function(num){
    console.log(num)
})

const sumArray = numArray.reduce(function(num1, num2){
    return num1+num2
})
console.log(sumArray)
*/
// funções

function myFunction(name, surname){
    return `O nome completo é: ${name} ${surname}.`
}

console.log(myFunction('welligton', 'lins'))

//arrow function === função anônima
// =>  fetch: estudar para amanha

const myArrowFunction = (a, b) => a+b

console.log(myArrowFunction(3, 9))

const ativ = (x) => () => x + 5

console.log(ativ(6)())

() => ( (x=7) => (x+5) )

