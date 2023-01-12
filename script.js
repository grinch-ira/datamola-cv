const menuLinks = document.querySelectorAll(
  ".header-menu__items-link[data-goto]"
);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  /**плавный переход по ссылке */
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

/*       if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        headerMenu.classList.remove("_active");
        header.classList.remove("_lock");
        makeFriends.classList.remove("_lock");
        headerLogo.classList.remove("_lock");
        knowRest.classList.remove("_lock");
        helpShelter.classList.remove("_lock");
      } */
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}