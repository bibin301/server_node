var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recipientSchema = new Schema({
    email : String,
    responded : {
        type: Boolean , 
        default: false
    }
});


module.exports = recipientSchema;