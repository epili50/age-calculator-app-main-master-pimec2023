// Buena suerte

// creo un objeto DATA con la fecha actual
let now = new Date();
//Creo un objeto date vacío para poner la fecha de nacimiento del usuario

// variables del input
let day;
let month;
let year;

// Captura el click del boton
const button = document.querySelector('.calculator__user-input-btn');

button.addEventListener('click', function(){
    console.log(year);
    let userBirthdate = new Date(year+"-"+month+"-"+day);
    console.log(userBirthdate);
})


// capturo los la fecha puesta por el usuario

const inputDays = document.querySelector(".input-days");


inputDays.addEventListener('input', function(e){
   day = e.target.value;
   //console.log(day);
   
})

const inputMonths = document.querySelector('.input-months');

inputMonths.addEventListener('input', function(e){
    month = e.target.value;
})

const inputYears = document.querySelector('.input-years');

inputYears.addEventListener('input', function(e){
    year = e.target.value;
})

