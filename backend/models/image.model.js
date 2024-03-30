const {model, Schema} = require('mongoose');

const imageSchema = new Schema({

})

const image = model('image', imageSchema);
module.exports = image;