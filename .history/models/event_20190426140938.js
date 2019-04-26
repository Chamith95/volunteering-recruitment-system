const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');
 

// Schema
const EventSchema = mongoose.Schema({
  title: {
    type: String
  },
  email: {
    type: String,
    //required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.getEventById = function(id, callback){
  Event.findById(id, callback);
}

module.exports.getEventByEventname = function(eventname, callback){
  const query = {eventname: eventname}
  User.findOne(query, callback);
}

module.exports.addEvent = function(newEvent, callback){
   
      if(err) throw err;
      newEvent.save(callback);
 

}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}