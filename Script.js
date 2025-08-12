// ===== Navbar Scroll Effect =====
const navbar = document.getElementById("navbar");
const SCROLL_THRESHOLD = 50;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
});

// ===== Mobile Menu Toggle =====
const menuToggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu a");

menuToggleBtn.addEventListener("click", () => {
  const isActive = menu.classList.toggle("active");
  document.body.classList.toggle("menu-open", isActive);
  menuToggleBtn.innerHTML = isActive ? "&#10006;" : "&#9776;";
});

// ===== Close Menu on Link Click =====
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggleBtn.innerHTML = "&#9776;";
  });
});
