let operacion='';
function menu(){
       operacion = prompt(`\nCalculadora Basicca
       1 - suma;
       2 - resta
       3 - multiplicacion
       4 - dividision
       0 - salir
       
       Elija una opcion`);

       if(operacion === '1' || operacion === '2' || operacion === '3' || operacion === '4'){
            capturaDatos();
            menu();
        } else if (operacion === '0' || operacion === null ){
            alert(`Fin de la operacion`) 
        }else {
            alert(`Opcion no valida`)
            menu();
        }
}

function capturaDatos(){
    let num1, num2;
    while (isNaN(num1)){
        num1 = prompt(`ingrese el primer numero: `)
    }
    while(isNaN(num2)){
       num2 = prompt(`ingrese el segundo numero`)
    }
    realizarOperacion(Number(num1),Number(num2),operacion);
}
    
function realizarOperacion(num1, num2, operacion){
    if(operacion == '1')
     alert(`El resultado de la Suma es: ${num1 + num2}`);
    else if(operacion == '2')
        alert(`El resultado de la Resta es: ${num1 - num2}`);
    else if(operacion == '3')
        alert(`El resultado de la Multiplicacion es: ${num1 * num2}`);
    else if(operacion == '4'){
        if(num2 !== 0)
             alert(`El resultado de la Division es: ${num1 / num2}`);
        }else{
           alert(`No se admite division * 0`)

        }
}
menu();


       
     



