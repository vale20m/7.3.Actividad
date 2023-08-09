function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Verificar que los campos no esten vacios y que las contraseñas sean iguales

const contraseña1 = document.getElementById("password1");
const contraseña2 = document.getElementById("password2");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const terminos = document.getElementById("terminos");

function verificarCampos(){
    if (nombre.value != "" && apellido.value != "" && email.value != "" && contraseña1.value != "" && contraseña2.value != "" && contraseña1.value == contraseña2.value && terminos.checked){
        return true;
    } else {
        return false;
    }
}

// Verificar que los datos sean válidos

const registrarme = document.getElementById("regBtn");

registrarme.addEventListener("click", function(){
    if (verificarCampos()){
        showAlertSuccess();
    } else {
        showAlertError();
    }
});