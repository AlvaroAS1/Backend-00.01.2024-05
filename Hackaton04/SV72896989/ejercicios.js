//RETO 1

function ejercicio1_reto1(){

    let a = parseFloat(prompt("Ingrese el primer numero"));
    let b = parseFloat(prompt("Ingrese el segundo numero"));
    let suma = a + b;
    alert("La suma de los dos numeros es " + suma);

}

function ejercicio2_reto1(){

    let base = parseFloat(prompt("Ingrese el numero a potenciar"));
    let exponente = parseFloat(prompt("Ingrese el exponente"))
    let potencia = Math.pow(base, exponente);
    alert("La potencia " + base + " elevado a la " + exponente + " es " + potencia)

}

function ejercicio3_reto1(){

    // Como quiero que el usuario ingrese los numeros cuyos cubos se sumaran, pedire que los separe por comas para que ingrese cuantos desee
    let input = prompt("Ingrese los numeros separados por comas");

    // Ahora convertire el string en un array de numeros
    let numbers = input.split(",").map(num => Number(num.trim()));
  
    // Creo la función para el calculo de la suma de los cubos
    const sumOfCubes = (...numbers) => {
      return numbers.reduce(
        (accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        0
      );
    };
  
    let resultado = sumOfCubes(...numbers);
  
    let formattedResult = `sumOfCubes(${numbers.join(", ")}) ➞ ${resultado}`;

    alert(formattedResult);
    
}

function ejercicio4_reto1() {
    
    let base = prompt("Ingrese la base del triangulo");
    base = Number(base);

    let altura = prompt("Ingrese la altura del triangulo:");
    altura = Number(altura);

    let area = (base * altura) / 2;

    alert(`triArea(${base}, ${altura}) ➞ ${area}`);
}


function ejercicio5_reto1() {
    let numero_1 = prompt("Ingrese el primer numero");
    let operador = prompt("Ingrese la operacion matematica (+, -, /, x, %)");
    let numero_2 = prompt("Ingrese el segundo numero");

    numero_1 = Number(numero_1);
    numero_2 = Number(numero_2);

    let resultado;

    switch (operador) {
        case '+':
            resultado = numero_1 + numero_2;
            break;
        case '-':
            resultado = numero_1 - numero_2;
            break;
        case '/':
            resultado = numero_1 / numero_2;
            break;
        case 'x':
            resultado = numero_1 * numero_2;
            break;
        case '%':
            resultado = numero_1 % numero_2;
            break;
        default:
            resultado = "El parametro no es reconocido";
            alert(resultado);
            return;
    }

    alert(`calculator(${numero_1}, "${operador}", ${numero_2}) ➞ ${resultado}`);
}


//RETO 2

function ejercicio1_reto2() {
    
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");
    
    const mensaje = (nombre, apellido, edad) => {
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
    };
   
    alert(mensaje(nombre, apellido, edad));

}

function ejercicio2_reto2(){

    // Como quiero que el usuario ingrese los numeros cuyos cubos se sumaran, pedire que los separe por comas para que ingrese cuantos desee
    let input = prompt("Ingrese los numeros separados por comas");

    // Ahora convertire el string en un array de numeros
    let numbers = input.split(",").map(num => Number(num.trim()));
  
    // Creo la función para el calculo de la suma de los cubos
    const sumOfCubes = (...numbers) => {
      return numbers.reduce(
        (accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
        0
      );
    };
  
    let resultado = sumOfCubes(...numbers);
  
    let formattedResult = `sumOfCubes(${numbers.join(", ")}) ➞ ${resultado}`;

    alert(formattedResult);
    
}

function ejercicio3_reto2(){
    
    const typeValue = (valor) => typeof valor;
 
    // Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui. Uso "hola" como ejemplo
    alert("El tipo de valor es " + typeValue("hola"));

}
    
function ejercicio4_reto2(){

    let input = prompt("Ingrese los numeros separados por coma que desea sumar");

    let numeros = input.split(",").map(num => parseFloat(num.trim()));

    let suma = (...numeros) => {
        return numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    alert(`La suma de los numeros ingresados es ${suma(...numeros)}`);

}


function ejercicio5_reto2(){
    // Array de ejemplo. Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui 
    let array = [1, "hola", true, "adios", 3.14, "mundo"];
    
    let strings = array.filter(valor => typeof valor === 'string');

    alert(`Los valores que son strings son: ${strings.join(', ')}`);
}

function ejercicio6_reto2() {
    let numeros = prompt("Ingrese una matriz de números separados por coma para determinar el mínimo y máximo")
                    .split(",")
                    .map(num => Number(num.trim()));

    let min = Math.min(...numeros);
    let max = Math.max(...numeros);

    let formattedResult = `minMax([${numeros.join(", ")}]) ➞ [${min}, ${max}]`;

    alert(formattedResult);
}

function ejercicio7_reto2() {
    try {
        let phoneNumber = prompt("Ingrese 10 numeros enteros (entre 0 y 9) separados por coma para formar un numero de telefono").split(",").map(num => parseInt(num.trim(), 10));

        if (phoneNumber.length !== 10) {
            throw new Error(`La matriz debe contener exactamente 10 numeros enteros`);
        }

        let formattedNumber = `(${phoneNumber.slice(0, 3).join("")}) ${phoneNumber.slice(3, 6).join("")}-${phoneNumber.slice(6, 10).join("")}`;

        alert(`formatPhoneNumber([${phoneNumber.join(', ')}]) ➞ "${formattedNumber}"`);

    } catch (error) {
        alert(error.message);
    }
}

function ejercicio8_reto2() {

    let input = prompt("Ingrese una matriz de matrices. Separe los numeros con comas y las matrices con puntos y coma (ejemplo: 4,2,7,1;20,70,40,90;1,2,0)");

    let matriz_unica = input.split(";").map(subArray => subArray.split(",").map(num => parseInt(num.trim(), 10)));

    let numeros_mayores = matriz_unica.map(subArray => Math.max(...subArray));

    alert(`findLargestNums([${matriz_unica.map(subArray => `[${subArray.join(', ')}]`).join(', ')}]) ➞ [${numeros_mayores.join(', ')}]`);
}

function ejercicio9_reto2() {

    let palabra = prompt("Ingrese una palabra");
    let caracter = prompt("Ingrese un caracter para buscar");
        
    let primer_indice = palabra.indexOf(caracter);
    let ultimo_indice = palabra.lastIndexOf(caracter);

    alert(`charIndex("${palabra}", "${caracter}") ➞ [${primer_indice}, ${ultimo_indice}] // The first "${caracter}" has index ${primer_indice}, the last "${caracter}" has index "${ultimo_indice}".`);

}

function ejercicio10_reto2() {

    const toArray = (obj = {}) => {
        const result = [];
    
        for (const clave in obj) {
        result.push([clave, obj[clave]]);
        }
        return result;
    };
    
    // Objeto de ejemplo. Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui
    let obj = { a: 1, b: 2 };
    let result = toArray(obj);
    
    let formattedResult = result.map(pair => `[${pair.map(item => JSON.stringify(item)).join(", ")}]`).join(", ");
    alert(`toArray(${JSON.stringify(obj)}) ➞ [${formattedResult}]`);

}

function ejercicio11_reto2() {
    const presupuestos = (personas) => {
        let sumaPresupuestos = personas.reduce((acumulador, persona) => acumulador + persona.budget, 0);
        return sumaPresupuestos;
    };

    // Objeto de ejemplo. Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui
    let personas = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ];

    let resultado = presupuestos(personas);
    alert(`getBudgets(${JSON.stringify(personas)}) ➞ ${resultado}`);
}

function ejercicio12_reto2() {
    const getStudentNames = (estudiantes) => {
        return estudiantes.map(estudiante => estudiante.name);
    };

    // Objeto de ejemplo. Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui
    let estudiantes = [
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ];

    let nombresEstudiantes = getStudentNames(estudiantes);
    alert(`getStudentNames(${JSON.stringify(estudiantes)}) ➞ ${JSON.stringify(nombresEstudiantes)}`);
}

function ejercicio13_reto2() {
    const objectToArray = (objeto) => {
        return Object.entries(objeto);
    };

    // Objeto de ejemplo. Como prompt cambia cualquier valor que ingrese el usuario a string, opte porque el parametro se modifique desde aqui
    let objeto = {
        likes: 2,
        dislikes: 3,
        followers: 10
    };

    let matrizClavesValores = objectToArray(objeto);
    alert(`objectToArray(${JSON.stringify(objeto)}) ➞ ${JSON.stringify(matrizClavesValores)}`);
}

function ejercicio14_reto2() {
    let n = parseInt(prompt("Ingrese un numero para calcular la suma de los cuadrados hasta ese numero"));

    let sumaCuadrados = 0;
    let sumaDetalles = "";

    for (let i = 1; i <= n; i++) {
        let cuadrado = i * i;
        sumaCuadrados += cuadrado;
        sumaDetalles += `${i}²`;
        if (i < n) {
            sumaDetalles += " + ";
        } else {
            sumaDetalles += " = ";
        }
    }

    sumaDetalles += sumaCuadrados;
    alert(`squaresSum(${n}) ➞\n// ${sumaDetalles}`);
}

function ejercicio15_reto2() {
    let input = prompt("Ingrese una matriz de numeros separados por coma para multiplicar cada uno por la longitud de la matriz");

    let numeros = input.split(",").map(num => Number(num.trim()));

    let longitud = numeros.length;

    let resultado = numeros.map(num => num * longitud);

    alert(`multiplyByLength([${numeros}]) ➞ [${resultado}]`);
}

function ejercicio16_reto2() {

    let numero = parseInt(prompt("Ingrese un numero para comenzar el conteo hacia cero"));

    let resultado = [];
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    
    alert(`countdown(${numero}) ➞ [${resultado}]`);
}

function ejercicio17_reto2() {

    let numeros = prompt("Ingrese una matriz de numeros separados por coma para calcular la diferencia entre el mayor y el menor");

    let arrayNumeros = numeros.split(",").map(num => Number(num.trim()));

    let maximo = Math.max(...arrayNumeros);
    let minimo = Math.min(...arrayNumeros);

    let diferencia = maximo - minimo;

    alert(`diffMaxMin([${arrayNumeros}]) ➞ ${diferencia}\n// Smallest number is ${minimo}, biggest is ${maximo}.`);

}

function ejercicio18_reto2() {

    let matriz = prompt("Ingrese una matriz de numeros y strings separados por coma");

    let arrayMatriz = matriz.split(",").map(item => item.trim());

    let numeros = arrayMatriz.filter(item => !isNaN(item) && Number.isInteger(parseFloat(item)));

    alert(`filterList([${arrayMatriz}]) ➞ [${numeros}]`);

}

function ejercicio19_reto2() {
    
    let elemento = prompt("Ingrese el elemento que desea repetir");
    let veces = prompt("Ingrese la cantidad de veces que desea repetir el elemento");

    veces = parseInt(veces);

    const repeat = (elemento, veces) => {
        let resultado = [];
        for (let i = 0; i < veces; i++) {
            resultado.push(elemento);
        }
        return resultado;
    };

    let resultado = repeat(elemento, veces);

    alert(`repeat(${elemento}, ${veces}) ➞ [${resultado}]`);
}

function ejercicio20_reto2() {
   
    let cadena = prompt("Ingrese la cadena");
    let vocal = prompt("Ingrese la vocal para reemplazar todas las vocales de la cadena");

       String.prototype.vreplace = function(vocal) {
        return this.replace(/[aeiouAEIOU]/g, vocal);
    };

    let resultado = cadena.vreplace(vocal);

    alert(`"${cadena}".vreplace("${vocal}") ➞ "${resultado}"`);
}

function ejercicio21_reto2() {
    
    let cadena = prompt("Ingrese una cadena de palabras");

    let palabras = cadena.split(" ");
    let posicion = palabras.indexOf("Nemo") + 1;

    if (posicion > 0) {
        let resultado = `findNemo("${cadena}") ➞ "I found Nemo at ${posicion}!"`;
        alert(resultado);
    } else {
        alert(`findNemo("${cadena}") ➞ "I didn't find Nemo"`);
    }
}

function ejercicio22_reto2() {
    let cadena = prompt("Ingrese una cadena de palabras");

    const capLast = (str) => {
        return str.split(" ").map(word => {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        }).join(" ");
    };

    let resultado = capLast(cadena);

    alert(`capLast("${cadena}") ➞ "${resultado}"`);
}