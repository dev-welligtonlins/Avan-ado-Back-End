fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then((dados => (dados.forEach(item => {
        console.log(`Nome ${item['id']}`)
     })))

