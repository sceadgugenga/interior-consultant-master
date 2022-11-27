let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleMenu, false);
window.addEventListener("resize", checkWindowSize);

let newBreakpoint = true;

function checkWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 900) {
    if (newBreakpoint) {
      let mainNav = document.getElementById("main-nav");
      mainNav.classList.remove("menu-open");

      hamburger.classList.remove("menu-open-icon");
      newBreakpoint = false;
    } else {
      newBreakpoint = true;
    }
  }
}

function toggleMenu() {
  let mainNav = document.getElementById("main-nav");

  let mainNavClassList = mainNav.className;
  mainNav.classList.toggle("menu-open");
  hamburger.classList.toggle("menu-open-icon");
}
