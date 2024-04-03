window.addEventListener("DOMContentLoaded", () => {
  switch (navigator.language) {
    case "en-US":
      establecerIdioma("English");
      changeLanguage("en");
      break;
    case "es-ES":
      establecerIdioma("Español");
      changeLanguage("es");
      break;

    default:
      break;
  }
});

// Navbar shrink function
var navbarShrink = function () {
  const navbarCollapsible = document.body.querySelector("#mainNav");
  if (!navbarCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove("navbar-shrink");
  } else {
    navbarCollapsible.classList.add("navbar-shrink");
  }
};

// Shrink the navbar
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener("scroll", navbarShrink);

//  Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector("#mainNav");
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: "#mainNav",
    rootMargin: "0px 0px -40%",
  });
}

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector(".navbar-toggler");
const responsiveNavItems = [].slice.call(
  document.querySelectorAll("#navbarResponsive .nav-link")
);
responsiveNavItems.map(function (responsiveNavItem) {
  responsiveNavItem.addEventListener("click", () => {
    if (window.getComputedStyle(navbarToggler).display !== "none") {
      navbarToggler.click();
    }
  });
});
//translate
const idiomaActual = document.getElementById("idioma");
const listaIdiomas = document.getElementById("idiomas");
const idiomas = document.getElementsByClassName("option");
idiomaActual.addEventListener("click", (e) => {
  e.preventDefault();
  listaIdiomas.classList.toggle("idiomasActive");
});
//buscar las secciones
const textsToChange = document.querySelectorAll("[data-section]");
//llamado de json language
const changeLanguage = async (language) => {
  const requestJson = await fetch(`languages/${language}.json`);
  const texts = await requestJson.json();
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};
//click en el lenguage
const opcionesArray = Array.from(idiomas);
opcionesArray.forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    changeLanguage(e.target.parentElement.dataset.language);
    listaIdiomas.classList.toggle("idiomasActive");
    const idioma = opcion
      .getElementsByTagName("span")[0]
      .textContent.toLocaleLowerCase();
    establecerIdioma(idioma);
  });
});
function establecerIdioma(idioma) {
  idiomaActual.getElementsByTagName(
    "img"
  )[0].src = `assets/banderas/${idioma}.jpg`;
}

window.addEventListener("load", () => {
  new Glider(document.querySelector(".carusel_lista"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: ".carusel_indicadores",
    arrows: {
      prev: ".carusel_anterior",
      next: ".carusel_siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1042,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          duration: 0.25,
        },
      },
    ],
  });
});

/**
 * Animation on scroll function and init
 */
function aos_init() {
  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  aos_init();
});

//formulario
const formContact = document.getElementById("contactForm");

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const send = `Reciba un cordial saludo de ${name} con nùmero de telèfono ${phone} y email ${email} con mensaje : ${message}`;
  var messageSend = encodeURIComponent(send);
  var number = encodeURIComponent("+593988497045");
  window.location.href = "https://wa.me/" + number + "?text=" + messageSend;
  formContact.reset();
});
