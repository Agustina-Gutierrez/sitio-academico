var nombre = document.getElementById("nombre")
var catedras= document.getElementById("catedras")
var correo= document.getElementById("correo")
var tuexperiencia= document.getElementById("tuexperiencia")
var boton= document.getElementById("boton")

function validarInformacion() {
    nombre.addEventListener('input',validarNombre);
    catedras.addEventListener('input',validarCatedra);
    correo.addEventListener('input',validarCorreo);
    tuexperiencia.addEventListener('input',validarTuExperiencia);

validarNombre()
validarCatedra()
validarCorreo()
validarTuExperiencia()
}
function validarNombre() {
    if(nombre.value==""){
        nombre.setCustomValidity("Por favor ingrese su nombre")
    } else {
        nombre.setCustomValidity("")
    }
}
function validarCatedra() {
    if(catedras.value==""){
        catedras.setCustomValidity("Ingrese la catedra en la que curso")
    } else {
        catedras.setCustomValidity("")
    }
}
function validarCorreo() {
    if(correo.value==""){
        correo.setCustomValidity("Por favor ingrese su correo electronico")
    } else {
        correo.setCustomValidity("")
    }
}
function validarTuExperiencia() {
    if(tuexperiencia.value==""){
        tuexperiencia.setCustomValidity("Cuentanos tu experiencia")
    } else {
        tuexperiencia.setCustomValidity("Gracias por compartir tu experiencia")
    }
}
window.addEventListener("load", validarInformacion)

