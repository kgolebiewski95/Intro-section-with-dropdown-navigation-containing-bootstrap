let arrowImage = 0;
let featmenu = document.querySelector("#featuresmenu");

function changeArrow(nr) {
    let element = document.querySelector("#arrow" + nr);
    if (arrowImage % 2 == 0) {
        element.innerHTML = "<img src='images/icon-arrow-up.svg' alt=''>"
    } else {
        element.innerHTML = "<img src='images/icon-arrow-down.svg' alt=''>"
    }
    arrowImage++;
}
let clicked = false;

function openMenu() {
    let menuIcon = document.querySelector("#togglericon");
    let mainMenu = document.querySelector("#mainmenu");

    if (clicked == false) {
        clicked = true;
        menuIcon.classList.add("togglerX");
        mainMenu.classList.add("mobile-menu");
        document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
    } else {
        clicked = false;
        menuIcon.classList.remove("togglerX");
        mainMenu.classList.remove("mobile-menu");
        document.body.style.backgroundColor = "var(--almostwhite)";
    }
}