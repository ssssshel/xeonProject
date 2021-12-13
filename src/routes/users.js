const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Rol = require('../../models/rol')
const jwt = require('jsonwebtoken');
const config = require('../libs/config');

router.get('/signup', (req, res)=>{
  res.render("signup")
});



router.get('/profile', (req, res) => {
  
  res.render("userProfile")
})


//REGISTRO DE NUEVOS USUARIOS

router.post('/signup', async(req, res) => {
	try {
		const {username, email, password, roles} = req.body;

  userFound = User.find({email})

  const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password)
  })

	if(roles){
		const foundRoles = await Rol.find({ name: {$in: roles} })
		newUser.roles = foundRoles.map(rol => rol._id)
	}else{
		const role = await Rol.findOne({name: "user"})
		newUser.roles = [role._id];
	}

  const savedUser = await newUser.save();
  const token = jwt.sign({id: savedUser._id}, config.SECRET, {expiresIn: 86400})
  res.render("alert", {title: "Success", mensaje: "Se creó usuario con éxito", redirect: "/", redirectDesc: "Volver al menú principal"}).status(200);
	} catch (error) {
		
		res.render("alert", {title: "Error", mensaje: `Ha ocurrido un error ${error}`, redirect: "/users/signup", redirectDesc: "Volver al registro"})
		
	}
  
  
})


// -------------------------------------------------------------------------------

//RUTA A LA VENTANA SIGNIN
router.get('/signin', (req,res)=>{
    res.render("signin")
});



//INGRESO DE USUARIOS REGISTRADOS
router.post('/signin', async(req, res) => {

	//SE EVALUA EL USERNAME
	const userFound =  await User.findOne({ email: req.body.email }).populate("roles")

	if(!userFound){
		return res.status(400).json({title: "User not found", message: "Usuario no encontrado"}).render("alert", {mensaje: "Usuario no encontrado", redirect: "/users/signin", redirectDesc: "Volver a intentarlo"})
	}

	//SE EVALUA LA PASSWORD
	const matchPassword = await User.comparePassword(req.body.password, userFound.password)

	if(!matchPassword){
		return res.status(401).json({token: null, message: 'Contraseña inválida'})
	}

	//SI AMBOS SON CORRECTOS SE ASIGNA UN JWT AL USER
	const token = jwt.sign({ id: userFound._id }, config.SECRET, {expiresIn: 86400});

	res.json({token})
})

module.exports = router;