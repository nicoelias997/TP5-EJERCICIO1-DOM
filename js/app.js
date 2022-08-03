const botonAdivinar = document.getElementById("botonAdivinar");
const cambiarParrafo = document.getElementById("cambiarParrafo");
let numeroAleatorio;

const parrafoNuevo = document.getElementById("cambiarParrafo");



const generarNumAleatorio = () => {
    numeroAleatorio = Math.floor(Math.random()*(10-1+1)+1);
    console.log(numeroAleatorio)
}


const adivinarNumero = () => {

let numeroUsuario = document.getElementById("numeroUsuario").value;

    if(!isNaN(numeroUsuario) && numeroUsuario > 0 && numeroUsuario <= 10){

    if(numeroUsuario < numeroAleatorio){
        alert(`Incorrecto, el numero que elegiste es menor al numero aleatorio!`);

        parrafoNuevo.innerHTML = `Incorrecto, el numero que elegiste es menor al numero aleatorio!`       
    }

    if(numeroUsuario > numeroAleatorio){
        alert(`Incorrecto, el numero que elegiste es mayor al numero aleatorio!`)

        parrafoNuevo.innerHTML = `Incorrecto, el numero que elegiste es mayor al numero aleatorio!`

    }
    if(numeroUsuario == numeroAleatorio){
        alert(`Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`);

        parrafoNuevo.innerHTML = `Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`
        parrafoNuevo.className = "fs-1 text-danger mt-2";
    }

} else if(isNaN(numeroUsuario || numeroUsuario > 10 || numeroUsuario < 0)){
    alert("Ingresa un numero valido entre 1 y 10")
}  else if(numeroUsuario == ""){
    alert("Comienza el juego, debes pulsar 'Comenzar' para generar un numero aleatorio!")
} 
}
