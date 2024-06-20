const btnHamburger = document.querySelector(".btn-hamburger");
const btnExit = document.querySelector(".btn-exit");
const mobileMenu = document.querySelector(".sidebar");

[btnHamburger, btnExit].forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    mobileMenu.classList.toggle("toggle-menu");
  });
});
