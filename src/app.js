import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let whoRandom = who[Math.floor(Math.random() * who.length)]
  let actionRandom = action[Math.floor(Math.random() * action.length)]
  let whatRandom = what[Math.floor(Math.random() * what.length)]
  let whenRandom = when[Math.floor(Math.random() * when.length)]



  /*
    Reto: Crea una función llamada getRandomElement que reciba un array como argumento 
    y devuelva un elemento aleatorio de ese array. Utiliza esta función para simplificar 
    la generación de la excusa en el código proporcionado.

    Ejemplo de uso de la función getRandomElement:


    function getRandomElement(array) {
      // Implementa la lógica aquí
    }

    let myArray = ['apple', 'banana', 'cherry'];
    let randomFruit = getRandomElement(myArray);
  */


  let excuse = document.getElementById("excuse")
  excuse.innerHTML = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`

};
