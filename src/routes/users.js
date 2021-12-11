const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
var serviceAccount = require("../feature/firebase/xeon-24444-firebase-adminsdk-zhm8e-8c36a09176.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL:`https://${process.env.DBLINK}.firebaseio.com/`
    databaseURL: 'https://xeon-24444-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/signup', (req, res)=>{
    res.render("signup")
});

// router.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyDRWNV68ZESh8qIXF2S0nYgRwckrH8OAJE', (req,res)=>{
//   const newUser = ({
//     "email": req.body.email,
//     "password": req.body.password,
//     "returnSecureToken": true
//   })
//   try {
//     const envio = req(newUser);
//     sen
//     if(envio){
//       console.log("se registro")
//     }else{
//       alert("no se registro")
//     }
//   } catch (error) {
//     console.log(error);
//   }})

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