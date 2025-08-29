const toggleMenu = document.querySelector(`button.header__navbar-toggler`);
const navbarCollapse = document.querySelector(`.header__navbar-collapse`);
const navbarNav = navbarCollapse.querySelector(`ul.header__navbar-nav`);
const body = document.querySelector(`body`);

toggleMenu.addEventListener("click", (e) => {
  e.preventDefault();
  const currentTarget = e.currentTarget;
  const btnImage = currentTarget.querySelector(`img`);
  const expanded = currentTarget.getAttribute("aria-expanded") === "true";

  // toggle value
  currentTarget.setAttribute("aria-expanded", expanded ? "false" : "true");

  // delay timer
  let navbarNavTimerId;

  // control navbarCollapse
  if (currentTarget.getAttribute("aria-expanded") === "true") {
    navbarCollapse.classList.add(`header__navbar-collapse--show`);

    if (navbarNavTimerId) clearTimeout(navbarNavTimerId);

    navbarNav.classList.add(`header__navbar-nav--show`);
    body.style.overflow = "hidden";
    btnImage.setAttribute(
      "src",
      new URL("../assets/images/icon-menu-close.svg", import.meta.url)
    );
  } else if (currentTarget.getAttribute("aria-expanded") === "false") {
    navbarNav.classList.remove(`header__navbar-nav--show`);

    if (navbarNavTimerId) clearTimeout(navbarNavTimerId);

    // waiting navbarNav transition to finish
    navbarNavTimerId = setTimeout(() => {
      navbarCollapse.classList.remove(`header__navbar-collapse--show`);
      body.style.overflow = "visible";
      btnImage.setAttribute(
        "src",
        new URL("../assets/images/icon-menu.svg", import.meta.url)
      );
    }, 500);
  }
});
