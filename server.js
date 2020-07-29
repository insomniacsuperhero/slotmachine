const express = require('express')
const app = express()

let SERVER_PORT = process.env.PORT || 3344;

app.use('/',express.static(__dirname + '/public'))

app.listen(SERVER_PORT,()=>{
    console.log('server started on http://localhost:' + SERVER_PORT)
})