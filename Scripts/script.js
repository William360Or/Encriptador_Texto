let texto= document.getElementById("texto")
let tarjeta1=document.getElementById("tarjeta__uno")
let tarjeta2=document.getElementById("tarjeta__dos")
let btn_encriptar=document.getElementById("btn_encriptar")
let btn_desencriptar=document.getElementById("btn_desencriptar")
let btn_copiar =document.getElementById("btn_copiar")

function tarjeta(){
    tarjeta1.style.display="none";
    tarjeta2.style.display="block";
}

//funcion encriptar
function encriptarTexto() {
    let textoIn = texto.value.toString().toLowerCase();
    let nuevoTexto = textoIn
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    document.getElementById("text_encriptado").innerHTML = nuevoTexto;
}

//funcion desencriptar
function desencriptarTexto() {
    let textoIn = texto.value;
    let nuevoTexto = textoIn
        .replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
    document.getElementById("text_encriptado").innerHTML = nuevoTexto;
}

//Funcion Copiar
function copy() {
    let textoEncriptado = document.getElementById("text_encriptado");
    navigator.clipboard.writeText(textoEncriptado.value)
        .then(() => {
            let mensaje = document.getElementById(textoEncriptado);
            mensaje.textContent = "Texto copiado: " + textoEncriptado.value;
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });
    
}

//Botones
btn_encriptar.addEventListener('click', function () {
    tarjeta();
    encriptarTexto();

});

btn_desencriptar.addEventListener('click', function () {
    tarjeta();
    desencriptarTexto();
});

btnCopy.addEventListener('click', function () {
    copy();
});

