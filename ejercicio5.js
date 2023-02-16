const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
   let sueldoMensual; 
   const CANTIDAD_MESES= 12;
   const salarioAnual = Number(document.querySelector('#sueldo-anual').value); 

    sueldoMensual = salarioAnual/CANTIDAD_MESES;

    document.querySelector('#salario-mensual').innerText = sueldoMensual;
   return false;
}
