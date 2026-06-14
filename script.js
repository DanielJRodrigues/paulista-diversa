/* ==========================================
   PAULISTA DIVERSA
   SCRIPT.JS
========================================== */


/* ==========================================
NAVBAR AO ROLAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.style.background =
      "rgba(255,255,255,.90)";

    navbar.style.boxShadow =
      "0 8px 30px rgba(0,0,0,.08)";

  }

  else{

    navbar.style.background =
      "rgba(255,255,255,.65)";

    navbar.style.boxShadow =
      "none";

  }

});





/* ==========================================
ANIMAÇÃO REVEAL
========================================== */

const reveals =

document.querySelectorAll(

".section"

);


const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach((entry)=>{


if(

entry.isIntersecting

){

entry.target.classList.add(

"show"

);

}

});


},

{

threshold:0.15

}

);




reveals.forEach((element)=>{

element.classList.add(

"hidden"

);

observer.observe(

element

);

});







/* ==========================================
MENU ATIVO
========================================== */

const sections =

document.querySelectorAll(

"section"

);


const navLinks =

document.querySelectorAll(

".navbar a"

);




window.addEventListener(

"scroll",

()=>{


let current = "";


sections.forEach((section)=>{


const sectionTop =

section.offsetTop - 180;


const sectionHeight =

section.offsetHeight;



if(

window.scrollY >= sectionTop &&

window.scrollY <

sectionTop + sectionHeight

){

current =

section.getAttribute(

"id"

);

}


});




navLinks.forEach((link)=>{


link.classList.remove(

"active"

);



if(

link.getAttribute(

"href"

)

===

"#" + current

){

link.classList.add(

"active"

);

}

});


}

);








/* ==========================================
EFEITO NA GALERIA
========================================== */

const galleryCards =

document.querySelectorAll(

".gallery-card"

);



galleryCards.forEach((card)=>{


card.addEventListener(

"mouseenter",

()=>{


card.style.transform =

"translateY(-10px)";


});



card.addEventListener(

"mouseleave",

()=>{


card.style.transform =

"translateY(0px)";


});

});








/* ==========================================
SCROLL SUAVE PARA LINKS INTERNOS
========================================== */

document

.querySelectorAll(

'a[href^="#"]'

)

.forEach(anchor=>{


anchor.addEventListener(

"click",

function(e){

e.preventDefault();


const target =

document.querySelector(

this.getAttribute(

"href"

)

);


if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}


}

);


});








/* ==========================================
ANIMAÇÃO DA LOGO
========================================== */

const logo =

document.querySelector(

".hero-logo-wrapper img"

);


window.addEventListener(

"mousemove",

(e)=>{


const x =

(window.innerWidth / 2

- e.clientX)

/

50;


const y =

(window.innerHeight / 2

- e.clientY)

/

50;



logo.style.transform =

`

translate(

${-x}px,

${-y}px

)

`;



}

);








/* ==========================================
PARALLAX DO HERO
========================================== */

const gradient1 =

document.querySelector(

".hero-gradient-1"

);


const gradient2 =

document.querySelector(

".hero-gradient-2"

);




window.addEventListener(

"scroll",

()=>{


const scroll =

window.scrollY;



gradient1.style.transform =

`translateY(${scroll * 0.20}px)`;


gradient2.style.transform =

`translateY(${-scroll * 0.15}px)`;


}

);







/* ==========================================
FADE IN HERO
========================================== */

window.addEventListener(

"load",

()=>{


document.querySelector(

".hero-left"

).style.opacity = "1";


document.querySelector(

".hero-right"

).style.opacity = "1";


document.querySelector(

".hero-left"

).style.transform =

"translateY(0px)";


document.querySelector(

".hero-right"

).style.transform =

"translateY(0px)";


}

);