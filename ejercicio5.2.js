const $botonMostrarInfo = document.querySelector('#mostrar-informacion');

$botonMostrarInfo.onclick = function(){

    const primerNombre =document.querySelector('#primer-nombre').value;
    const segundoNombre =document.querySelector('#segundo-nombre').value;
    const apellido =document.querySelector('#apellido').value;
    const edad = Number(document.querySelector('#edad').value); 
    let infoCompleta;
    
    infoCompleta= primerNombre+ segundoNombre+ apellido+ edad;
    
    document.querySelector('#informacion-completa').value = infoCompleta;
    
    const tituloBinvenida= document.querySelector('h1') ;
    tituloBinvenida.innerText = "Bienvenido, "+ primerNombre +"!";

    return false;
}

