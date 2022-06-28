const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// Toggle Menu
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Colors

const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#0044ff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});


AOS.init();


gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.4, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.7, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.4, y: -10 });

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  x: -30,
  stagger: 0.2,
});