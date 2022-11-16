const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {

    //definin rotas para a aplicação
    if(req.url === '/')
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err
            res.end(content)
        })

        //res.end('<h1>Página Inicial</h1>')
    if(req.url === '/contato')
        res.end('<h1>Contato')
}).listen(5000, () => (console.log('Server Ok!'))) 