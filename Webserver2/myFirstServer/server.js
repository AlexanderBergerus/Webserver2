const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "hemsida.html" ))
app.get('/hemsida.css' , (req, res) => res.sendFile(clientDir + "hemsida.css" ))
app.get('/joggnyjordi.jpg' , (req, res) => res.sendFile(clientDir + "joggnyjordi.jpg"))


app.post('/', function (req, res) {
    if (req.body.fname === "Alex" && req.body.mail == "Alex@gmail.com") { 
        console.log("yes")
    }
    else if (req.body.fname === "Alex" && req.body.mail != "Alex@gmail.com") {
        console.log("no")
    }
    else if (req.body.fname != "Alex" && req.body.mail == "Alex@gmail.com") {
        console.log("no")
  }
  else {
    console.log("You don't exist and your life is a lie.")
}
})
app.listen(port, () => console.log(`Example app listening on port port!`))