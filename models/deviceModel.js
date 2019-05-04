const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deviceSchema = new Schema({
    device_name : {type : String, required : true},
    status : {type: Number, required : true},
    type : {type : String, required : true}
})

module.exports = mongoose.model('device_details',deviceSchema);