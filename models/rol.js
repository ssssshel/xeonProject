const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rolSchema = new schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
)

const Rol = mongoose.model('Rol', rolSchema);

module.exports = Rol;