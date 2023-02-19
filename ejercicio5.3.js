
const $botonCalcular = document.querySelector('#calculo');

$botonCalcular.onclick = function(){

const horaVideoPrimero = Number(document.querySelector('#horas-primero').value);
const minutoVideoPrimero = Number(document.querySelector('#minutos-primero').value);
const segundosVideoPrimero = Number(document.querySelector('#segundos-primero').value);
const horaVideoSegundo = Number(document.querySelector('#horas-segundo').value);
const minutoVideoSegundo = Number(document.querySelector('#minutos-segundo').value);
const segundosVideoSegundo = Number(document.querySelector('#segundos-segundo').value);
const horaVideoTercero = Number(document.querySelector('#horas-tercero').value);
const minutoVideoTercero = Number(document.querySelector('#minutos-tercero').value);
const segundosVideoTercero = Number(document.querySelector('#segundos-tercero').value);
let resultadoSumaHoras;
let  resultadoSumaMinutos;
let  resultadoSumaSegundo;

    resultadoSumaHoras = horaVideoPrimero+horaVideoSegundo+horaVideoTercero; 
    resultadoSumaMinutos = minutoVideoPrimero+minutoVideoSegundo+minutoVideoTercero;
    resultadoSumaSegundo = segundosVideoPrimero+segundosVideoSegundo+segundosVideoTercero;



    document.querySelector('#resultado').innerText ="El tiempo total de los videos es " + resultadoSumaHoras +" Horas "+ resultadoSumaMinutos +" Minutos " + resultadoSumaSegundo + " Segundos";

return false;
}
