const {model, Schema} = require('mongoose');

const eventSchema = new Schema({

})

const Event = model('event', eventSchema);
module.exports = Event;