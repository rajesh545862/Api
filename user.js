const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  location: Array,
  verified: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;
