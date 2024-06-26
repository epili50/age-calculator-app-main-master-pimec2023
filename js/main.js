// Buena suerte

// creo un objeto DATA con la fecha actual
let now = new Date();
//Funcion de validacion de fecha
function diasMes(mes, anio) {
    return new Date(anio || new Date().getFullYear(), mes, 0).getDate();
  }
// variables del input
let day;
let month;
let year;
let diference;

// Captura el click del boton
const button = document.querySelector('.calculator__user-input-btn');

button.addEventListener('click', function(){
    
    //console.log(year);
    let userBirthdate = new Date(year+"-"+month+"-"+day);
    
    if(day <= diasMes(month, year) && + year < now.getFullYear()){
    diference = now - userBirthdate;
    // Calcular los años
    let diferenceYear = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));
    diference -= diferenceYear * (1000 * 60 * 60 * 24 * 365.25);
    // Calcular los meses
    let diferenceMonth = Math.floor(diference / (1000 * 60 * 60 * 24 * 30.4375));
    diference -= diferenceMonth * (1000 * 60 * 60 * 24 * 30.4375);
    // Calcular los días
    let diferenceDays = Math.floor(diference / (1000 * 60 * 60 * 24));
    document.querySelector('#yearText').textContent = diferenceYear;
    document.querySelector('#monthText').textContent = diferenceMonth;
    document.querySelector('#dayText').textContent = diferenceDays;
    document.querySelector('#dayError').style.opacity = '0';
          /*day*/
          inputDays.classList.remove('error-input__border');
          inputDays.classList.remove('error-input__border:focus');
          pDay.style.color = 'hsl(0, 1%, 44%)';
          /*month*/
         inputMonths.classList.remove('error-input__border');
         inputMonths.classList.remove('error-input__border:focus');
         pMonth.style.color = 'hsl(0, 1%, 44%)';
          /*year*/   
         inputYears.classList.remove('error-input__border');
         inputYears.classList.remove('error-input__border:focus');
         inputYears.style.color = 'hsl(0, 1%, 44%)';
    }else{
        //si existe algun error, ingresa a esta parte
        document.querySelector('#dayError').textContent="Must be a valid date";
        document.querySelector('#dayError').style.opacity = '0.8'; 
        document.querySelector('#monthError').style.opacity = '0'; 
        document.querySelector('#yearError').style.opacity = '0'; 
        /*day*/
        inputDays.classList.add('error-input__border');
        inputDays.classList.add('error-input__border:focus');
        pDay.style.color = 'hsl(0, 100%, 67%)';
        /*month*/
        inputMonths.classList.add('error-input__border');
        inputMonths.classList.add('error-input__border:focus');
        pMonth.style.color = 'hsl(0, 100%, 67%)';
        /*year*/   
        inputYears.classList.add('error-input__border');
        inputYears.classList.add('error-input__border:focus');
        pYear.style.color = 'hsl(0, 100%, 67%)';

    }
    
});



// capturo los la fecha puesta por el usuario

const inputDays = document.querySelector(".input-days");
const pDay= document.querySelector('#pDay');
const pMonth = document.querySelector('#pMonth');
const pYear = document.querySelector('#pYear');
inputDays.addEventListener('input', function(e){
    console.log(e.target.value);
    
    if(+e.target.value > 31 || +e.target.value < 1 && e.target.value.length > 0){
        document.querySelector('#dayError').style.opacity = '0.8';
        pDay.style.color = 'hsl(0, 100%, 67%)';
        inputDays.classList.add('error-input__border');
        inputDays.classList.add('error-input__border:focus');
       
    }else{
        document.querySelector('#dayError').style.opacity = '0';
        inputDays.classList.remove('error-input__border');
        inputDays.classList.remove('error-input__border:focus');
        pDay.style.color = 'hsl(0, 1%, 44%)';
    }
    //console.log(e.target.value);
    day = e.target.value;
    
   
   
})

const inputMonths = document.querySelector('.input-months');

inputMonths.addEventListener('input', function(e){
    
    if(+e.target.value > 12 || +e.target.value < 1 && e.target.value.length > 0){
        document.querySelector('#monthError').style.opacity = '80';
        inputMonths.classList.add('error-input__border');
        pMonth.style.color = 'hsl(0, 100%, 67%)';
        pMonth.classList.add('error-input__border:focus');
    }else{
        document.querySelector('#monthError').style.opacity = '0';
        inputMonths.classList.remove('error-input__border');
        pMonth.style.color = 'hsl(0, 1%, 44%)';
        pMonth.classList.remove('error-input__border:focus');
    }
    console.log(month);
    month = e.target.value;
})

const inputYears = document.querySelector('.input-years');

inputYears.addEventListener('input', function(e){
    if(+e.target.value > now.getFullYear() && e.target.value.length > 0){
        document.querySelector('#yearError').style.opacity = '80';
        inputYears.classList.add('error-input__border');
        pYear.style.color = 'hsl(0, 100%, 67%)';
        pYear.classList.add('error-input__border:focus');
    }else{
        document.querySelector('#yearError').style.opacity = '0';
        inputYears.classList.remove('error-input__border');
        pYear.style.color = 'hsl(0, 1%, 44%)';
        pYear.classList.remove('error-input__border:focus');
    }
        
    year = e.target.value;
})

