const botonAdivinar = document.getElementById("botonAdivinar");
const cambiarParrafo = document.getElementById("cambiarParrafo");

let numeroAleatorio;

const generarNumAleatorio = () => {
    numeroAleatorio = Math.floor(Math.random()*(10-1+1)+1);
    console.log(numeroAleatorio);
    cambiarParrafo.innerHTML = "El juego empezo, es hora de adivinar el numero."
    cambiarParrafo.className = "fs-5 mt-4"
}

const adivinarNumero2 = () => {
    let vidas = 3;
   do{
        let numeroUsuario = document.getElementById("numeroUsuario").value;

        if(numeroAleatorio != numeroUsuario){
            vidas--
        if(numeroAleatorio > numeroUsuario){
            alert(`Numero elegido menor al numero aleatorio, elige otro numero. Te quedan ${vidas} vidas.`);   
            cambiarParrafo.innerHTML = `Numero elegido menor al numero aleatorio, elige otro numero. Te quedan ${vidas} vidas.`;
        }
        else if(numeroAleatorio < numeroUsuario){
            alert(`Numero elegido mayor al numero aleatorio, elige otro numero. Te quedan ${vidas} vidas.`);
            cambiarParrafo.innerHTML = `Numero elegido mayor al numero aleatorio, elige otro numero. Te quedan ${vidas} vidas.`;
        
        }
        return vidas

    } else if(numeroUsuario == numeroAleatorio){
        alert(`Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`);           
        cambiarParrafo.innerHTML = `Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`
        cambiarParrafo.className = "fs-1 text-danger mt-2";
        break;
            }  
} while(vidas > 0);

    }















// Adivinar numero de manera ilimitada
// const adivinarNumero = () => {

// let numeroUsuario = document.getElementById("numeroUsuario").value;

//     if(!isNaN(numeroUsuario) && numeroUsuario > 0 && numeroUsuario <= 10){

//     if(numeroUsuario < numeroAleatorio){
//         alert(`Incorrecto, el numero que elegiste es menor al numero aleatorio!`);

//         cambiarParrafo.innerHTML = `Incorrecto, el numero que elegiste es menor al numero aleatorio!`       
//     }

//     if(numeroUsuario > numeroAleatorio){
//         alert(`Incorrecto, el numero que elegiste es mayor al numero aleatorio!`)

//          cambiarParrafo.innerHTML = `Incorrecto, el numero que elegiste es mayor al numero aleatorio!`

//     }
//     if(numeroUsuario == numeroAleatorio){
//         alert(`Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`);

//         cambiarParrafo.innerHTML = `Felicidades, has adivinado el numero! El numero era ${numeroAleatorio}`
//         cambiarParrafo.className = "fs-1 text-danger mt-2";
//     }

// } else if(isNaN(numeroUsuario || numeroUsuario > 10 || numeroUsuario < 0)){
//     alert("Ingresa un numero valido entre 1 y 10")
// }  else if(numeroUsuario == ""){
//     alert("Comienza el juego, debes pulsar 'Comenzar' para generar un numero aleatorio!")
// } 
// }
