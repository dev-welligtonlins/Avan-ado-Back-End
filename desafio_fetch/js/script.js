fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then((dados => (dados.forEach(item => {
        //  console.log(`Nome ${item['name']}, Email ${item['email']}`)


            const ul = document.querySelector('.text')
            // console.log(ul)

            const li = document.createElement('li')
            li.textContent = `Nome: ${item.name} E-mail: ${item.email}`
            ul.appendChild(li)
            console.log(li)

    }))))

