const {model, Schema} = require('mongoose');

const userSchema = new Schema({

})

const User = model('user', userSchema);
module.exports = User;