
const $botonCalculo = document.querySelector('#calculo');

$botonCalculo.onclick = function(){
    const numerosLi = document.querySelectorAll('li');
    console.log(numerosLi)
    let resultadoPromedio;
    let sumatoriaArray=0; 
        for(let i=0; i<numerosLi.length;i++){
            console.log(numerosLi[i].innerText);
            sumatoriaArray=sumatoriaArray + Number(numerosLi[i].innerText);
        }

        resultadoPromedio= sumatoriaArray/numerosLi.length;
        console.log(sumatoriaArray);
        
        
        document.querySelector('#promedio').innerText =resultadoPromedio;

return false;
}
