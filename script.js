//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"
}

// desaparecer menu una vez que se ha seleccionado una opcion en el modo responsive

var x = document.getElementById("nav")

//funcion que muestra el menu responsive 

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else {
        x.className ="";
    }
}

//detectar scrolling para aplicar animacion 
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica animacion de la barra de habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("javascript").classList.add("barra-progreso1");
        document.getElementById("bd").classList.add("barra-progreso1");
        document.getElementById("office").classList.add("barra-progreso1");
        document.getElementById("comunicacion").classList.add("barra-progreso1");
    }
}


/* Boton interactivo muestra y esconde datos */


//card0
const hideText = document.getElementById("hideText") 
const hideText_btn = document.getElementById("hideText-btn") 

hideText_btn.addEventListener('click', toggleText) ;

function  toggleText () {
        hideText.classList.toggle('hide')  
    
    
    if (hideText.classList.contains('hide')) {
        hideText_btn.innerHTML = '+';
    } else {
        hideText_btn.innerHTML = '-';
    }
}


//card1
const hideTextn = document.getElementById("hideTextn") 
const hideText_btnn = document.getElementById("hideText-btnn") 

hideText_btnn.addEventListener('click', toggleText2) ;

function  toggleText2 () {
        hideTextn.classList.toggle('hide')  
    
    
    if (hideTextn.classList.contains('hide')) {
        hideText_btnn.innerHTML = '+';
    } else {
        hideText_btnn.innerHTML = '-';
    }
}
//card2
const hideTextA = document.getElementById("hideTextA") 
const hideText_btnA = document.getElementById("hideText-btnA") 

hideText_btnA.addEventListener('click', toggleText3) ;

function  toggleText3 () {
        hideTextA.classList.toggle('hide')  
    
    
    if (hideTextA.classList.contains('hide')) {
        hideText_btnA.innerHTML = '+';
    } else {
        hideText_btnA.innerHTML = '-';
    }
}
//card3
const hideTextB = document.getElementById("hideTextB") 
const hideText_btnB = document.getElementById("hideText-btnB") 

hideText_btnB.addEventListener('click', toggleText4) ;

function  toggleText4 () {
        hideTextB.classList.toggle('hide')  
    
    
    if (hideTextB.classList.contains('hide')) {
        hideText_btnB.innerHTML = '+';
    } else {
        hideText_btnB.innerHTML = '-';
    }
}

//card4
const hideTextC = document.getElementById("hideTextC") 
const hideText_btnC = document.getElementById("hideText-btnC") 

hideText_btnC.addEventListener('click', toggleText5) ;

function  toggleText5 () {
        hideTextC.classList.toggle('hide')  
    
    
    if (hideTextC.classList.contains('hide')) {
        hideText_btnC.innerHTML = '+';
    } else {
        hideText_btnC.innerHTML = '-';
    }
}

//card5

const hideTextD = document.getElementById("hideTextD") 
const hideText_btnD = document.getElementById("hideText-btnD") 

hideText_btnD.addEventListener('click', toggleText6) ;

function  toggleText6 () {
        hideTextD.classList.toggle('hide')  
    
    
    if (hideTextD.classList.contains('hide')) {
        hideText_btnD.innerHTML = '+';
    } else {
        hideText_btnD.innerHTML = '-';
    }
}



//Formulario

const nombreCompleto = document.getElementById("nombreCompleto");
const mail = document.getElementById("mail");
const tema= document.getElementById("tema");
const mensaje = document.getElementById("mensaje");
const errorForm = document.getElementById("errorForm")
const form = document.getElementById("form")
errorForm.style.color ="red";


/*Formulario*/


form.addEventListener("submit", e=> {
    e.preventDefault()
    let errorFormulario =""
    let entrar = false


    if(nombreCompleto.value.length < 6) {
       errorFormulario += `Debe completar el campo con su nombre y apellido. `
       entrar = true
    }

    if(tema.value.length < 8) {
        errorFormulario += `Agregue un asunto a su mail. `
        entrar = true
     }


    if(mail.value.length < 10) {
        errorFormulario += `Debe completar el campo con su mail. `
        entrar = true
     }

     if(mensaje.value.length < 25) {
        errorFormulario += `Debe ingresar un mensaje`
        entrar = true
     }

    if(entrar) {
        errorForm.innerHTML = errorFormulario
    } else {
        errorForm.innerHTML = "Su consulta fue enviada"
        form.reset();
    }
}) 
