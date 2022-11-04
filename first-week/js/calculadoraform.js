const formData = new FormData(document.querySelector('calculadoraform'))
const inputValue1 = formData.get("num1")
const inputValue2 = formData.get("num2")

console.log(inputValue1)

console.log(typeof inputValue1)