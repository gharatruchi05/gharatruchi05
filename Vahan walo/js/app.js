function windowScroll() {
  const navbar = document.getElementById("navbar");
  const darkLogo = document.getElementById("logoDark");
  const lightLogo = document.getElementById("logoLight");

  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
    darkLogo.classList.add("d-none");
    lightLogo.classList.remove("d-none");
  } else {
    navbar.classList.remove("nav-sticky");
    darkLogo.classList.remove("d-none");
    lightLogo.classList.add("d-none");
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
