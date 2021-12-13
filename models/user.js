const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    ref: "Rol",
    type: mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
})

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async(password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

const User = mongoose.model('User', userSchema);
module.exports = User;
