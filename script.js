const USUARIOS = ["pepe", "jose", "carlos"]

const CONTRASENIAS = ["123", "tateti", "hola!"]

function verificar() {
    let us = document.querySelector("#usuario").value;
    let pw = document.querySelector("#contrasenia").value;

    function checkuser(un) {
        return un == us;
    }
    indexUN = USUARIOS.findIndex(checkuser);

    function checkpw(pass) {
        return pass == pw;
    }
    indexPW = CONTRASENIAS.findIndex(checkpw);

    if ((indexUN > -1) && (indexPW == indexUN)) {
        document.querySelector("#fracaso").innerHTML = ``;
        document.querySelector("#exito").innerHTML = `Login exitoso`;

    } else {
        document.querySelector("#exito").innerHTML = ``;
        document.querySelector("#fracaso").innerHTML = `Usuario y/o contraseña inválidos`;
    }

} 

function registrar() {
   let newuser = document.querySelector("#usuarionuevo").value;
   let newpw = document.querySelector("#contrasenianueva1").value;
   let pwcheck = document.querySelector("#contrasenianueva2").value;

   function checkNewUser(nun) {
    return nun == newuser;
   }

   indexNUN = USUARIOS.findIndex(checkNewUser);

   if (indexNUN > -1) {
    document.querySelector("#mensaje").innerHTML = `Ese nombre de usuario ya existe, por favor elija otro`
   } else if (indexNUN = -1 && newpw != pwcheck) {
    document.querySelector("#mensaje").innerHTML = `Por favor introduzca dos veces la misma contraseña`
   } else if (newuser !== null && newpw !== null && pwcheck !== null) {
    USUARIOS.push(document.querySelector("#usuarionuevo").value);
    CONTRASENIAS.push(document.querySelector("#contrasenianueva1").value);
    document.querySelector("#mensaje").innerHTML = `Usuario registrado exitosamente`
   }
}

function mostrar(){
    document.getElementById("botregis").style.display = "none"
    document.getElementById("regocul").style.display = "block"
}