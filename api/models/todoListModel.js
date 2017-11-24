'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter full name'
  },
  email: {
    type: String,
    required: 'Kindly enter e-mail address'
  },
  username: {
    type: String,
    required: 'Kindly enter username'
  },
  phone: {
    type: String,
    required: 'Kindly enter phone number'
  },
  password: {
    type: String,
    required: 'Kindly enter password'
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  profile: {
    type: [{
      type: String,
      enum: ['customer', 'vendor', 'admin']
    }],
    default: ['customer']
  }
});

module.exports = mongoose.model('Users', UserSchema);
