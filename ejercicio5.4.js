
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
        document.querySelector('#promedio').innerText =resultadoPromedio;


    let numeroMasPequenio = Number(numerosLi[0].innerText);    
    for(let i=0; i<numerosLi.length;i++){
        if(numeroMasPequenio > Number(numerosLi[i].innerText)){
            numeroMasPequenio = Number(numerosLi[i].innerText)
        }
    }
    document.querySelector('#pequenio').innerText =numeroMasPequenio;






return false;
}
        
        
        
