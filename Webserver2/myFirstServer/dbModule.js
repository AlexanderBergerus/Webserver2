const mongoose = require('mongoose')
const personModel = require('./personModel')

exports.DB = () => {
mongoose.connect('mongodb://localhost/test'),
{useNewUrlParser: true, useUnifiedTopology: true}}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Good, you started your database")
});
 
exports.storeElement = (element) => {
  element.save(() => {
    console.log("successfully saved a person in database")
  }

  )
}