const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  Password: String
});

const User = mongoose.model('User', userSchema);

exports.createUser = (uName, uEmail, uPassword) => {
  var user = new User({
    name: uName,
    email: uEmail,
    Password: uPassword
  })
  return user

}

//    exports.getAllUsers = async () =>{
//     let users = await User.find({})
//     return users
// }

exports.getUser = async (uName) => {
  var user = await User.findOne({ name: uName })
  return user
}