require('dotenv').config()
const { Schema, model } = require('mongoose');

const Usuario = new Schema({
  name:  String,
  lastname: String,
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
  profile: {type:String,default:`${process.env.PATH}profile.jpg`},

  state: {
          type:Boolean,
          default:true
          },

});

module.exports = model('usuario', Usuario)