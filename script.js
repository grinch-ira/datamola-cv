const header = document.querySelector(".header");
const iconMenu = document.querySelector(".menu__icon");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const wrapper = document.querySelector(".wrapper");
const menuLinks = document.querySelectorAll(
  ".header-menu__items-link"
);

if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
    headerLogo.classList.toggle("_lock");
    wrapper.classList.toggle("_lock");
  });
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
    headerLogo.classList.toggle("_lock");
    wrapper.classList.toggle("_lock");
  }
  )
})
}




console.log(menuLinks)

