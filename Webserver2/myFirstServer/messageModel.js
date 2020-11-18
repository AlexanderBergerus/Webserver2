const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (name, email, age) => {
    var message = new Message({
        name: name, 
        email: email, 
        age: age 
       })
       exports.getAllMessages = async () =>{
        let messages = await Message.find({})
        return messages
    }
     message.save((result)=>{
       console.log(result)
     })
     return message

    
 }