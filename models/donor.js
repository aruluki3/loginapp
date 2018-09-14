var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');



var donorSchema = mongoose.Schema({

  fullname: {
    type: String,
    index:true
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  age: {
    type: String
  },
  bloodgroup: {
    type: String
  },
  dateofbirth: {
    type: String
  },
  city: {
    type: String
  },
  phonenumber : {
    type: String
  },
  password: {
    type: String
  },
  diseas: {
    type: String
  },
  alc: {
    type: Boolean
  }

});

var Donor = module.exports = mongoose.model('Donor', donorSchema);

module.exports.createDonor = function(newDonor, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newDonor.password, salt, function(err, hash) {
      newDonor.password = hash;
      newDonor.save(callback)
    });
  });
}
