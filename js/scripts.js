window.addEventListener("DOMContentLoaded", (event) => {
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
});

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
