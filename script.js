let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleMenu, false);
// window.addEventListener('resize', checkWindowSize);


// function checkWindowSize() {
// const windowWidth = window.innerWidth;
// if (windowWidth > 600) {
//     let mainNav = document.getElementById("main-nav");
//     mainNav.classList.remove("menu-open")
//     mainNav.classList.remove("menu-closed")
//     // hamburger.classList.remove("menu-open-icon")
// }

// }

function toggleMenu() {
    let mainNav = document.getElementById("main-nav");
    
    let mainNavClassList = mainNav.className
    console.log(mainNav.style.display)
    // console.log(mainNavClassList.indexOf("menu-slidein"))
    // if (mainNav.style.display === "flex") {
    if (mainNavClassList.indexOf("menu-open") > -1) {
        mainNav.classList.remove("menu-open")
        hamburger.classList.remove("menu-open-icon")
        mainNav.classList.add("menu-closed")
        hamburger.classList.add("menu-closed-icon")
      
        // mainNav.style.display = "none"
    } else {
            mainNav.classList.remove("menu-closed")
        hamburger.classList.remove("menu-closed-icon")
        mainNav.classList.add("menu-open")
        hamburger.classList.add("menu-open-icon")
        // mainNav.style.display = "flex";
    }
  }
