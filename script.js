const btnHamburger = document.querySelector(".btn-hamburger");
const btnExit = document.querySelector(".btn-exit");
const mobileMenu = document.querySelector(".sidebar");

[btnHamburger, btnExit].forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("reveal-mobile-nav");
  });
});
