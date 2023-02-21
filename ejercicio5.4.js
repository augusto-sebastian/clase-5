
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

   
    let numeroMasGrande = Number(numerosLi[0].innerText);    
        for(let i=0; i<numerosLi.length;i++){
            if(numeroMasGrande < Number(numerosLi[i].innerText)){
                numeroMasGrande = Number(numerosLi[i].innerText)
            }
        }
        document.querySelector('#grande').innerText =numeroMasGrande;

    
    let numeroMasRepetido, contadorBase=0;    
        for(let i=0; i<numerosLi.length;i++){
            let contadorMasSeRepite =0;    
            for(let j=0; j<numerosLi.length;j++){
            
                if(Number(numerosLi[i].innerText) === Number(numerosLi[j].innerText)){
                    contadorMasSeRepite ++;
                }
                if(contadorMasSeRepite>contadorBase){
                    numeroMasRepetido=Number(numerosLi[i].innerText) 
                    contadorBase= contadorMasSeRepite;
                }
            }
        }
        document.querySelector('#frecuente').innerText =numeroMasRepetido; 



return false;
}
        
        
        
