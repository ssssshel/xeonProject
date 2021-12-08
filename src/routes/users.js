const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../xeon-24444-firebase-adminsdk-zhm8e-8c36a09176.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://xeon-24444-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/signup', (req, res)=>{
    res.render("signup")
});

router.post('/signup', (req,res)=>{
    const newusuarios = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        usuario: req.body.usuario,
        password: req.body.password
    };
    db.ref('Usuarios_registrer').push(newusuarios);
    res.send('received');
})

router.get('/signin', (req,res)=>{
    res.render("signin")
});

router.post('/signin', (req,res)=>{
    const usuarios = {
        user: req.body.user,
        password: req.body.password
    };
    db.ref('Usuarios_login').push(usuarios);
    res.send('received');
})

module.exports = router;

