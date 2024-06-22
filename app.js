let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
         if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","el numero secreto es menor");
        } else { 
            asignarTextoElemento("p","El numero secreto es  mayor")}
    }
    intentos++;
    limpiarcaja();

    return;
}

function limpiarcaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se jugaron todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1','El Número misterioso de Nico!');
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarcaja();
    //Inficar mensaje de intervalo
    condicionesIniciales();
    //Generar el numero aleatorio
   
    //Iniciar numero de eventos
    
    // desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();