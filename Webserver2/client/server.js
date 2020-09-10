const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname

app.get('/', (req, res) => res.sendFile(clientDir + "\\hemsida.html" ))
app.get('/hemsida.css' , (req, res) => res.sendFile(clientDir + "\\hemsida.css" ))
app.get('/joggnyjordi.jpg' , (req, res) => res.sendFile(clientDir + "\\joggnyjordi.jpg"))
app.listen(port, () => console.log(`Example app listening on port port!`))
