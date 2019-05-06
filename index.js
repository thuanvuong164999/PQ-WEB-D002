let pg = require('pg')
let client = new pg.Client(
    {
        user: 'postgres',
        password: 'postgres',
        database: 'csv',
        host: 'localhost',
        port: 5432
    }
)

client.connect()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    client.query('select * from csv', function(err, result){
        res.send(JSON.stringify(result.rows))
        client.end()
    })
})

app.listen(port, () => {
    
})