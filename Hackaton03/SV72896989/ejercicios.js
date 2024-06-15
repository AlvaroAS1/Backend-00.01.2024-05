function ejercicio1(){

    let numero = parseInt(prompt("Escribe un numero"))
    if (numero > 99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

function ejercicio2() {
    let numero_ingresado = parseInt(prompt("Ingrese un número entero"));

    if (numero_ingresado < 0) {
        alert("El número ingresado es negativo");
    } else if (numero_ingresado === 0) {
        alert("El número ingresado es 0, por lo que no es negativo ni positivo.");
    } else if (numero_ingresado > 0) {
        alert("El número ingresado no es negativo.");
    }
}

function ejercicio3() {
    let numero_ingresado = parseInt(prompt("Ingrese un número"));
    
    let ultima_cifra = Math.abs(numero_ingresado) % 10;
    
    if (ultima_cifra === 4) {
        alert("El número ingresado termina en 4.");
    } else {
        alert("El número ingresado no termina en 4.");
    }
}

function ejercicio4() {
    let primer_numero = parseInt(prompt("Ingrese el primer número"), 10);
    let segundo_numero = parseInt(prompt("Ingrese el segundo número"), 10);
    let tercer_numero = parseInt(prompt("Ingrese el tercer número"), 10);

    if (tercer_numero > segundo_numero && segundo_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + segundo_numero + ", " + tercer_numero);
    } else if (segundo_numero > tercer_numero && tercer_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + tercer_numero + ", " + segundo_numero);
    } else if (tercer_numero > primer_numero && primer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + primer_numero + ", " + tercer_numero);
    } else if (primer_numero > tercer_numero && tercer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + tercer_numero + ", " + primer_numero);
    } else if (primer_numero > segundo_numero && segundo_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + segundo_numero + ", " + primer_numero);
    } else if (segundo_numero > primer_numero && primer_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + primer_numero + ", " + segundo_numero);
    }
}

function ejercicio5(){
    let num_zapatos = parseInt(prompt("Ingrese el número de zapatos que se comprarán"), 10);
    let descuento = 0;
    
    if (num_zapatos > 10 && num_zapatos <= 20) {
        descuento = 0.1;
    } else if (num_zapatos > 20 && num_zapatos <= 30) {
        descuento = 0.2;
    } else if (num_zapatos > 30) {
        descuento = 0.4;
    }
    
    let precio_unitario = 80;
    let precio_total = precio_unitario * num_zapatos;
    let total_a_pagar = precio_total * (1 - descuento);
    
    alert("Debe pagarse: $" + total_a_pagar);
}

function ejercicio6(){
    let horas_trabajadas = prompt("Ingrese número de horas trabajadas");
    horas_trabajadas = parseInt(horas_trabajadas);
    
    let sueldo_semanal;
    
    if (horas_trabajadas <= 40) {
        sueldo_semanal = horas_trabajadas * 20;
    } else {
        sueldo_semanal = (40 * 20) + ((horas_trabajadas - 40) * 25);
    }
    
    alert("Su sueldo semanal es de $" + sueldo_semanal);
}

function ejercicio7(){
    let membresia = prompt("Ingrese el tipo de membresía (A, B o C)");
    let monto = prompt("Ingrese el monto en dólares a pagar");
    monto = parseFloat(monto);
    
    let descuento;
    
    if (membresia.toLowerCase() === "a") {
        descuento = 0.1;
    } else if (membresia.toLowerCase() === "b") {
        descuento = 0.15;
    } else if (membresia.toLowerCase() === "c") {
        descuento = 0.2;
    } else {
        descuento = 0;
    }
    
    let total_a_pagar = monto * (1 - descuento);
    alert("Tienes un descuento de " + (descuento * 100) + "%.\nSolo tendrás que pagar $" + total_a_pagar);    
}

function ejercicio8(){
    //Considero como nota aprobatoria 12.5 o más
    let nota_1 = prompt("Ingrese nota 1");
    let nota_2 = prompt("Ingrese nota 2");
    let nota_3 = prompt("Ingrese nota 3");
    
    nota_1 = parseFloat(nota_1);
    nota_2 = parseFloat(nota_2);
    nota_3 = parseFloat(nota_3);
    
    let promedio = (nota_1 + nota_2 + nota_3) / 3;
    
    if (promedio >= 12.5) {
        alert("El estudiante aprobó");
    } else {
        alert("El estudiante no aprobó");
    }    
}

function ejercicio9(){
    let salario = prompt("Ingrese el salario del trabajador:");

    salario = parseFloat(salario);
    
    let aumento;
    
    if (salario >= 2000) {
        aumento = salario * 1.05;
    } else {
        aumento = salario * 1.10;
    }
    
    alert("El aumento del trabajador es: $" + aumento);    
}

function ejercicio10(){
    let numero = prompt("Ingrese un número:");

    numero = parseInt(numero);
    
    if (numero % 2 === 0) {
        alert("El número ingresado es par");
    } else {
        alert("El número ingresado es impar");
    }    
}

function ejercicio11(){
    let primer_numero = prompt("Ingrese el primer número:");
    let segundo_numero = prompt("Ingrese el segundo número:");
    let tercer_numero = prompt("Ingrese el tercer número:");
    
    primer_numero = parseInt(primer_numero);
    segundo_numero = parseInt(segundo_numero);
    tercer_numero = parseInt(tercer_numero);
    
    if (tercer_numero > segundo_numero && segundo_numero > primer_numero) {
        alert("El número mayor es " + tercer_numero);
    } else if (segundo_numero > tercer_numero && tercer_numero > primer_numero) {
        alert("El número mayor es " + segundo_numero);
    } else if (tercer_numero > primer_numero && primer_numero > segundo_numero) {
        alert("El número mayor es " + tercer_numero);
    } else if (primer_numero > tercer_numero && tercer_numero > segundo_numero) {
        alert("El número mayor es " + primer_numero);
    } else if (primer_numero > segundo_numero && segundo_numero > tercer_numero) {
        alert("El número mayor es " + primer_numero);
    } else if (segundo_numero > primer_numero && primer_numero > tercer_numero) {
        alert("El número mayor es " + segundo_numero);
    }    
}

function ejercicio12(){
    let primer_numero = prompt("Ingrese el primer número:");
    let segundo_numero = prompt("Ingrese el segundo número:");
    
    primer_numero = parseInt(primer_numero);
    segundo_numero = parseInt(segundo_numero);
    
    if (primer_numero > segundo_numero) {
        alert("El número mayor es " + primer_numero);
    } else {
        alert("El número mayor es " + segundo_numero);
    }    
}

function ejercicio13(){
    let letra = prompt("Ingrese una letra:");

    switch (letra.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("La letra ingresada es una vocal");
            break;
        default:
            alert("La letra ingresada no es una vocal");
    }
        
}

function ejercicio14(){
    let numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
    let contador = 0;

    if (numero < 1 || numero > 10) {
        alert("El número ingresado no está en el rango permitido");
    } else {
        for (let divisor = 1; divisor <= 10; divisor++) {
            if (numero % divisor === 0) {
             contador++;
             }
         }

    if (contador === 2) {
        alert("El número ingresado es primo");
    } else {
        alert("El número ingresado no es primo");
    }
}

}

function ejercicio15(){

}

function ejercicio16(){

}

function ejercicio17(){

}

function ejercicio18(){

}

function ejercicio19(){

}

function ejercicio20(){

}

function ejercicio21(){

}

function ejercicio22(){

}

function ejercicio23(){

}

function ejercicio24(){

}

function ejercicio25(){

}

function ejercicio26(){

}

function ejercicio27(){

}

function ejercicio28(){

}

function ejercicio29(){

}

function ejercicio30(){

}

function ejercicio31(){

}

function ejercicio32(){

}

function ejercicio33(){

}

function ejercicio34(){

}

function ejercicio35(){

}

function ejercicio36(){

}

function ejercicio37(){

}

function ejercicio38(){

}

function ejercicio39(){

}

function ejercicio40(){

}