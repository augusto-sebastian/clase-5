
const botonClases = document.querySelector('#mostrar-clases');

botonClases.onclick = function(event){
    const cantidadDeClases = Number(document.querySelector('#cantidad-clases').value)

    removerClasesAnteriores();
    crearClases(cantidadDeClases)

    event.preventDefault();
}

const botonCalcular = document.querySelector('#calcular');

botonCalcular.onclick = function(event){
    const horas = obtenerHoraClases(); 
    const minutos = obtenerMinutoClases();
    const segundos = obtenerSegundoClases();

    mostrarSumaHora('hora',sumarHoras(horas));
    mostrarSumaMinuto('minuto',sumarMinutos(minutos));
    mostrarSumaSegundo('segundo',sumarSegundos(segundos));
    mostrarResultados();
    mostrarBotonReset();


    event.preventDefault();
}

const botonReset = document.querySelector('#resetear')
botonReset.onclick = function(event){
    resetear();

    event.preventDefault();
}


function crearClases(numero){
    
    if (numero > 0) {
        mostrarBotonCalculo();
      } 
    
    
    for(let i=0; i< numero;i++){
        crearClase(i)
    }
}

function crearClase(index){
    const nodoDiv = document.createElement('div')
    nodoDiv.className = 'clase-hora';
    const minutoDiv = document.createElement('div')
    minutoDiv.className = 'clase-minuto';
    const segundoDiv = document.createElement('div')
    segundoDiv.className = 'clase-segundo';

    const nodoLabel = document.createElement('label');
    nodoLabel.textContent = 'La clase numero '+ (index+1) +' dura:';
    const nodoInput = document.createElement('input');
    nodoInput.type= 'number';
    nodoInput.placeholder='hora';
    const minutoInput = document.createElement('input');
    minutoInput.type= 'number';
    minutoInput.placeholder='minutos';
    const segundoInput = document.createElement('input');
    segundoInput.type= 'number';
    segundoInput.placeholder='segundos';

    nodoDiv.appendChild(nodoLabel);
    nodoDiv.appendChild(nodoInput);
    minutoDiv.appendChild(minutoInput);
    segundoDiv.appendChild(segundoInput);

    contenedor = document.querySelector('#clases');
    contenedor.appendChild(nodoDiv)
    contenedor.appendChild(minutoDiv)
    contenedor.appendChild(segundoDiv)


}

function removerClasesAnteriores(){
    const clases = document.querySelectorAll('.clase-hora');
    for(i=0; i<clases.length; i++){
        clases[i].remove();
    }

    const claseMinuto = document.querySelectorAll('.clase-minuto');
    for(i=0; i<claseMinuto.length; i++){
        claseMinuto[i].remove();
    }
    const claseSegundo = document.querySelectorAll('.clase-segundo');
    for(i=0; i<claseSegundo.length; i++){
        claseSegundo[i].remove();
    }
}
function resetear(){
    removerClasesAnteriores();
    ocultarBotonCalculo();
    ocultarBotonReset();
    ocultarResultados();
}
function obtenerHoraClases(){
    const horasClase =  document.querySelectorAll('.clase-hora input');
    const arrayHoras=[];
    for(i=0; i<horasClase.length; i++){
       if(horasClase[i].value !== ''){

           arrayHoras.push(Number(horasClase[i].value));
       }
    }
    return arrayHoras;
}
function obtenerMinutoClases(){
    const minutoClase =  document.querySelectorAll('.clase-minuto input');
    const arrayMinuto=[];
    for(i=0; i<minutoClase.length; i++){
        arrayMinuto.push(Number(minutoClase[i].value));
    }
    return arrayMinuto;
}
function obtenerSegundoClases(){
    const segundosClase =  document.querySelectorAll('.clase-segundo input');
    const arraySegundos=[];
    for(i=0; i<segundosClase.length; i++){
        arraySegundos.push(Number(segundosClase[i].value));
    }
    return arraySegundos;
}
function mostrarSumaHora(tipo,resultado){
    document.querySelector(`#tiempo-${tipo}`).textContent=resultado;
}
function mostrarSumaMinuto(tipo,resultado){
    document.querySelector(`#tiempo-${tipo}`).textContent=resultado;
}
function mostrarSumaSegundo(tipo,resultado){
    document.querySelector(`#tiempo-${tipo}`).textContent=resultado;
}
function mostrarResultados(){
    document.querySelector('#resultados').className='';
}
function mostrarBotonCalculo(){
    document.querySelector('#calcular').className='';
}
function mostrarBotonReset(){
    document.querySelector('#resetear').className='';
}
function ocultarBotonCalculo(){
    document.querySelector('#calcular').className='oculto'
}
function ocultarBotonReset(){
    document.querySelector('#resetear').className='oculto'
}
function ocultarResultados(){
    document.querySelector('#resultados').className='oculto'
}
