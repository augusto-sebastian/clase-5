function sumarHoras(horas){
    const arrayHoras=horas;
    let sumaHora=0;
    for(i=0; i<arrayHoras.length; i++){
        sumaHora=sumaHora+arrayHoras[i];
    }
    return sumaHora;
}

function sumarMinutos(minutos){
    const arrayMinutos=minutos;
    let sumaMinutos=0;
    for(i=0; i<arrayMinutos.length; i++){
        sumaMinutos=sumaMinutos+arrayMinutos[i];
    }
    return sumaMinutos;
}
function sumarSegundos(segundos){
    const arraySegundos=segundos;
    let sumaSegundos=0;
    for(i=0; i<arraySegundos.length; i++){
        sumaSegundos=sumaSegundos+arraySegundos[i];
    }
    return sumaSegundos;
}