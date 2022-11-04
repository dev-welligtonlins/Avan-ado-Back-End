const formData = new FormData(document.querySelector('calculadoraform.js'))
const n1 = formData.get("n1")
const n2 = formData.get("n2")

const resultado = parseInt(n1.value) + parseInt(n2.value)
console.log(resultado)

console.log(typeof inputValue1)