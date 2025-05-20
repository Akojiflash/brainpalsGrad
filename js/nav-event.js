let menuIcon = document.querySelector(".menu-icon");
let navBarMenu = document.querySelector(".nav-bar-menu");

let closeIcon = document.querySelector(".close-icon");




menuIcon.addEventListener("click", () => {
    console.log(menuIcon)
    navBarMenu.classList.add("block")
    navBarMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden")
      closeIcon.classList.add("block")


})


closeIcon.addEventListener("click", () => {
    console.log(closeIcon);

    closeIcon.classList.add("hidden")
    navBarMenu.classList.add("hidden")
    navBarMenu.classList.remove("block")
    menuIcon.classList.add("block");
     menuIcon.classList.remove("hidden");
})

let screenSize = window.matchMedia("(min-width: 1024px)");
function handleResize(e) {
     console.log("change")
    if (e.matches) {
        console.log("if")
        navBarMenu.classList.add("hidden")
        navBarMenu.classList.remove("block")
        menuIcon.classList.add("block")
    } else {
        menuIcon.classList.add("md:hidden");
        console.log("else")

    }
}

screenSize.addEventListener("change", handleResize)