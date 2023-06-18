const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema =  mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },

}) 

//static method to register user
userSchema.statics.register = async function(username, password) {
  
  //validation

  if(!username || !password) {
    throw Error('Username and password are required')
  }  

  if(!validator.isAlphanumeric(username)) {
    throw Error('Username is not valid')
  }
  if(!validator.isAlphanumeric(password)) {
    throw Error('Password is not strong enough')
  }
  const exists = await this.findOne({username})

  if(exists) {
    throw new Error('Username already exists')
  }
  
  const salt= await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await  this.create({ username, password: hash })

  return user
  
  
}
 //static method to login user
userSchema.statics.login = async function(username, password) {
  
  if(!username || !password) {
    throw Error('Username and password are required')
  }  
  
  const user =await this.findOne({username})

  if(!user) {
    throw new Error('Incorrect username/password')
  }

  const match= await bcrypt.compare(password, user.password)

  const isadmin = user.role === 'admin'




  if(!match) {
    throw new Error('Incorrect username/password')
  }

      

  return user

}


module.exports = mongoose.model('User', userSchema)