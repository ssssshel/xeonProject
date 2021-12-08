const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@tigrupo11.gk6zc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = function(){  
  mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))
}