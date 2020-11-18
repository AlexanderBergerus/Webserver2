const express = require('express')
const ejs = require('ejs')
const app = express()
const dbModule = require('./dbModule')
const personModel = require('./personModule')
const UserModel = require('./UserModel')
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render("pages/hemsida.ejs", { name: "" })
})


app.get('/messages')

app.get('/login', (req, res) => {
  res.render('pages/login.ejs')
})
app.get('/register', (req, res) => {
  res.render('pages/register.ejs')
})

app.post('/register', async (req, res) => {
  let user = UserModel.createUser(req.body.uName, req.body.uEmail, req.body.uPassword)
  await dbModule.storeElement(user)
  res.redirect('/login')
})
app.post('/login', async (req, res) => {
  let user = await UserModel.getUser(req.body.uName)

  if (user) {
    if (user.Password == req.body.uPassword) {
      res.send('Success')

    }
    else {
      res.send('incorrect')
    }
  }
  else {
    res.send('User does not exist')

  }
})


app.post('/', (req, res) => {

  let person = personModel.createPerson
    (req.body.name, req.body.email, req.body.age)

  dbModule.storeElement(person)

  res.render("pages/hemsida.ejs", { name: req.body.name })

  //databaseModule.storePerson(req.body.name, req.body.email, req.body.age)

})

app.post('/postmessage', async (req, res) => {
  let message = messageModel.newMessage(req.body.email, req.body.message)
  dbModule.storeElement(message)
  let messages = await messageModel.getAllMessages()
  res.render("pages/messages.ejs", { messages: messages })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
}) 