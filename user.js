const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pepperdb').then(function(){
    console.log('conected to Database');
})

let userSchema = mongoose.Schema({
    post:String

})

module.exports = mongoose.model('user',userSchema);