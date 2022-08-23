const USUARIOS = ["pepe", "jose", "carlos"]

const CONTRASENIAS = ["123", "tateti", "hola!"]

/* TODO MAL DESDE ACA EKISDE
function verificar() {
    let us = document.querySelector("#usuario").value;
    let pw = document.querySelector("#contrasenia").value;

    for (i = 0; i < USUARIOS.length; i++) {
        if ((us = USUARIOS[i]) && (pw = CONTRASENIAS[i])) {
            document.querySelector("#fracaso").innerHTML = ``
            document.querySelector("#exito").innerHTML = `<h3> Un exito </h3>`;
            break
        } else {
            document.querySelector("#fracaso").innerHTML = `<h3> UN FRACASO </h3>`
        }
    }

    
}