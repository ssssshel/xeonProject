//ESTE MÓDULO VERIFICA SI UN JWT EXISTE

const jwt = require('jsonwebtoken');
const config = require('../libs/config');
const User = require('../../models/user')

const verifyToken = async(req, res, next) =>{
  try {
    const token = req.headers["x-access-token"];

    //VERIFICA SI SE BRINDA UN TOKEN
    if(!token) return res.status(403).json({message: "No se proporcionó un token"});

    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    //EN CASO EXISTA EL TOKEN, SE VERIFICA SI HAY UN USER ASOCIADO A ESTE
    const user = await User.findById(req.userId, {password: 0});
    if(!user) return res.status(404).json({message: 'Usuario no encontrado'});

    next();
  } catch (error) {
    return res.status(401).json({message: 'Sin autorización'})
  }
}

module.exports = verifyToken;