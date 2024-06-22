// function dibujarTabla(filas=1, columnas=1) {

//     for (let index = 0; index < filas; index++) {
        
//         console.log("fila: "+index)
//         for (let cindex = 0; cindex < columnas; cindex++) {
//             console.log("columnad: "+cindex)
            
//         }
//     }
//     console.log("dibujarTabla")
// }
// // console.log(filas)
// // dibujarTabla();

// let btnInicio = document.getElementById("btnInicio");
// btnInicio.addEventListener("click",function(){
//     console.log("Inicio del pedido")
//     pedirCafe();

// })

// function pedirCafe(){
//     let nombre = prompt("Dame tu nombre");
//     let tipoCafe = prompt("Escribe el tipo de cafe");
//     let producto = prompt("Escribe el nombre de tu "+tipoCafe);
//     let tamaño = prompt("Escribe el tamaño de tu " + producto);
//     let tipoLeche = prompt("Escribe el tipo de leche de tu "+ producto);
//     let cremaBatida = prompt("Deseas Crema Batida para tu "+producto);
//     let adicional = prompt("Deseas algun adicional para tu "+producto);

//     let objPedido = {
//         nombre,
//         tipoCafe ,
//         producto,
//         tamaño,
//         tipoLeche,
//         cremaBatida,
//         adicional
//     }
//   let estado =  prepararCafe(objPedido);
//   alert(estado)
//     console.log(objPedido)
// }

// function prepararCafe(pedido){
//     if(pedido.tipoCafe=="Frappuccinos"){
//         console.log("Buscar Cafe");
//         console.log("Mezclar los ingredientes");
//         console.log("Agregar la leche "+ pedido.tipoLeche);
//         console.log("Licuando los ingredientes");
//         console.log("Servir en un vaso "+ pedido.tamaño)
//         console.log("Agregando "+ pedido.adicional);
//         console.log("Sirviendo "+ pedido.producto +" para "+pedido.nombre)
//     }
//     else if(pedido.tipoCafe=="Expreso"){
//         console.log("Moler y Dosificar el Cafe para "+ pedido.tipoCafe);
//         console.log("Compactando el café molido");
//         console.log("Extraer el expreso");
//         console.log("Servir en un vaso "+ pedido.tamaño)
//         console.log("Agregando "+ pedido.tipoLeche+ " y " + pedido.adicional);
//         console.log("Sirviendo "+ pedido.producto +" para "+pedido.nombre)
//     }
//     pedirMasAzucar()
//     return "El cafe "+pedido.tipoCafe+ " esta listo"
    
// }

// let pedirMasAzucar = function(){
//     console.log("Dame mas azucar")
// }

// function multiplcacion(a,b){
//     return a * b
// }
// let multi = function(a,b){
//     return a*b
// }

// let myFunction = (a, b) => a * b;

// const vehiculo = {
//     marca:"BMW",
//     modelo:"M3",
//     color:"Blanco",
//     año: 2023,
//     trasmision : "StepTronic",
//     combustible: "Gasolina",
//     acelerar(){
//         console.log("El vehiculo "+ this.marca + " esta acelerando")
//     },
//     frenar(){
//         console.log("El vehiculo "+ this.marca + " esta frenando")
//     },
//     girar(direccion){
//         console.log("El vehiculo "+ this.marca + " esta girando a la "+direccion)
//     },
//     encender(){
//         console.log("El vehiculo "+ this.marca + " se esta encendiendo")
//     },
//     apagar(){
//         console.log("El vehiculo "+ this.marca + " se esta apagando")
//     }
// }

// vehiculo.encender();
// vehiculo.girar("Derecha")
// vehiculo.frenar();
// vehiculo.apagar()
// //vehiculo = "Soy un string"
// vehiculo.marca = "Mercedes"
// console.log(vehiculo)

/**
 * Vender Helados
 * Comprar Insumos
 * 
 * Clientes
 * -> Comprar Helados
 * Vendedores
 * -> Vendemos Helados
 * -> Compran Insumos
 * Proveedores
 * -> vendemos Insumos
 * Heladero
 * -> Prepara Helados
 * -> Insumos
 * -> Helados
 */
let arrClientes = [];
const Heladeria = function () //a
{
    let Nombre;
    let Direccion;
    function configurar() {
        document.getElementById("nombre").innerText = Nombre;
        document.getElementById("direccion").innerText = Direccion;
    }

    function eventos(){
        let btnCrearCliente = document.getElementById("crearCliente");
        btnCrearCliente.addEventListener("click", crearCliente)
        document.getElementById("cerrarVentana").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("infoCliente").style.display = "none";
        })
    }


    function crearCliente(){
        let nombre = prompt("Escribe tu Nombre");
        let documento = prompt("Escribe tu documento");
        let telefono = prompt("Escribe tu telefono");

        let objCliente = {
            nombre,
            documento,
            telefono,
            helado: {},
            estado: true,
            precio: 0,
            cobrado : false,
            comprarHelado() {
                let sabor = prompt("Escoje tu sabor")
                let tamano = prompt("Escoje tu tamaño")
                let toppis = prompt("Escoje tus toppins")
                this.helado.sabor = sabor;
                this.helado.tamano = tamano;
                this.helado.toppis = toppis;

            }
        };

        objCliente.comprarHelado();
        console.log(objCliente)
        cargarInfoCliente(objCliente)
        document.getElementById("infoCliente").style.display = "block";
        arrClientes.push(objCliente);

        console.log(arrClientes)
    }


    function cargarInfoCliente(obj) {
        document.getElementById("nombreCliente").value = obj.nombre;
        document.getElementById("telefonoCliente").value = obj.telefono;
        document.getElementById("saborHelado").value = obj.helado.sabor;
        document.getElementById("tamanoHelado").value = obj.helado.tamano;
        document.getElementById("toppisHelado").value = obj.helado.toppis;

    }

    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar();
            eventos();
        },
    };
}()