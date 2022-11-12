const os = require('os')
const log = require('./logger')
/*
const { freemem, totalmem } = os

const total = parseInt(totalmem()/1024/1242)
const freeMem = parseInt(freemem()/1024/1242)
const usage = total - freeMem

const percents = parseInt((usage/total)  * 100)

console.log(percents)

const stats = {
    total: `${total} MB`,
    freeMem: `${freeMem} MB`,
    percents: `${percents}% em uso`
}
console.log('++++++++ MEMORY STATS ++++++++')
console.table(stats)
*/
setInterval( () => { 
    const { freemem, totalmem } = os

    const total = parseInt(totalmem()/1024/1242)
    const freeMem = parseInt(freemem()/1024/1242)
    const usage = total - freeMem

    const percents = parseInt((usage/total)  * 100)

    console.log(percents)

    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents}% em uso`
    }
    console.clear()
    console.log('++++++++ MEMORY STATS ++++++++')
    console.table(stats)
    
    log('Rodando...', JSON.stringify(stats))

}, 1000 )