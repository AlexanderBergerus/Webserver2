const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


app.use(express.json())
app.use(express.urlencoded())


const clientDir = __dirname + "\\client\\"

const personSchema = new mongoose.Schema({
    name: String,
    mail: String
})

const person = mongoose.model("person", personSchema)

app.post("/", (req, res) => {
    var Alex = new person({name: req.body.name , mail: req.body.mail})
    Alex.save()
    res.send("example listening on port port!")
})


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