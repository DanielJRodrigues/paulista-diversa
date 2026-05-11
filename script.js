/* =========================================
   NAVBAR
========================================= */

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    navbar.classList.add(
      "navbar-scrolled"
    );

  }else{

    navbar.classList.remove(
      "navbar-scrolled"
    );
  }

});

/* =========================================
   REVEAL
========================================= */

const reveals =
  document.querySelectorAll(".reveal");

function revealOnScroll(){

  const trigger =
    window.innerHeight * 0.85;

  reveals.forEach((element) => {

    const top =
      element.getBoundingClientRect().top;

    if(top < trigger){

      element.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================================
   CURSOR GLOW
========================================= */

const glow =
  document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left =
    `${e.clientX}px`;

  glow.style.top =
    `${e.clientY}px`;

});

/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticButtons =
  document.querySelectorAll(".magnetic");

magneticButtons.forEach((button) => {

  button.addEventListener("mousemove", (e) => {

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `
      translate(
        ${x * 0.15}px,
        ${y * 0.25}px
      )
      `;
  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translate(0px,0px)";
  });

});

/* =========================================
   3D CARD EFFECT
========================================= */

const cards =
  document.querySelectorAll(
    ".hover-card"
  );

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      (y - centerY) / 18;

    const rotateY =
      (centerX - x) / 18;

    card.style.transform =
      `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      `;
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      `;
  });

});