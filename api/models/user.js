/**
 * Created by alexander.mann on 5/11/2015.
 */
// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        connected    : {type: Boolean, default: false}
    }
});

// methods ======================
userSchema.methods = {
    // generating a hash
    generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
    // checking if password is valid
    validPassword: function(password) {
        return bcrypt.compareSync(password, this.local.password);
    }
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);