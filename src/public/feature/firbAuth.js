const txtCor = document.getElementById('txtMail');
const txtCon = document.getElementById('txtPassword');
const btnReg = document.getElementById('btnRegistro');

function Limpiar(){
  txtCor.value="";
  txtCon.value="";
  txtCor.focus();
}

function Registrar(){
  if(txtCor.value == "" || txtCor.value == null){
    alert("Ingresa el correo");
  }else if(txtCon.value == "" || txtCon.value == null){
    alert("Ingresa la contraseña");
  }else{
    let cor=txtCor.value, con=txtCon.value;
    firebase.auth().createUserWithEmailAndPassword(cor, con)
    .then((userCredential) => {
      alert("Se registró el usuario");
      Limpiar();
    })
    .catch((error) => {
      alert("No se pudo registrar el usuario, intente nuevamente.");
      Limpiar();
    })
    // try {
    //   alert("Se registró el usuario");
    //   Limpiar();
    // } catch (error) {
    //   alert("No se pudo registrar el usuario, intente nuevamente.");
    //   Limpiar();
    // }
  }
}

btnReg.addEventListener('click', Registrar);