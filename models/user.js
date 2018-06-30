var mongoose = require ('mongoose');
var User = mongoose.model('Users', {
  Name : {
    type: String,
    required: true,
    minLength: 1
  },
  Email : {
    type :String,
    required : true,
    trim : true
  }
});
module.exports = {User};
