const { Schema, model } = require('mongoose');

const Usuario = new Schema({
  name:  String,
  LastName: String,
  birthday:   String,
  social_networks: [
             { name: String, 
               link: String 
             }],
  post: { type: Array,
          default: [] 
        },
  follow: { followers:
           {
             type: Array,
             default: []
           } ,
           follows:
           {
             type: Array,
             default: []
           } ,
        },
  
  email:  String,
  profile: String,
  state: Boolean,

});

module.exports = model('usuario', Usuario)