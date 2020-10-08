const express = require('express')
const ejs = require('ejs')
const app = express()
const dbModule = require('./dbModule')
const personModel = require('./personModel')
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(clientDir + "hemsida.html")
})

app.get('/', (req, res) => {
  res.sendFile(clientDir + "hemsida.css")
})

app.get('/', (req, res) => {
  res.sendFile(clientDir + "joggnyjordi.jpg")
})

app.post('/', (req, res) => {
  
  let person = personModel.createPerson
  (req.body.name, req.body.email, req.body.age)

  dbModule.storeElement(person)

  res.render

  //databaseModule.storePerson(req.body.name, req.body.email, req.body.age)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 