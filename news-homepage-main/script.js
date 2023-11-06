/**
 * Target:
 *  add all the links a active-link class when cursor hover the corresponding element.
 *  add a active-button class to read more button
 *  add a toggle button for nav when in mobile device view
 */
var links = document.querySelectorAll("a");
var mouseover = "mouseover", mouseout = "mouseout";
var imgDesktop = "assets/images/image-web-3-desktop.jpg";
var imgMobile = "assets/images/image-web-3-mobile.jpg";
var homeImg = document.querySelector(".homeImg");
var menu = document.querySelector(".menu");
var menuClose = document.querySelector(".menu-close");
var navBoard = document.querySelector(".navboard");
links.forEach(function (link) {
    if (link.classList.contains("read-more")) {
        toggleEvent("active-button", link);
    }
    else {
        toggleEvent("active-link", link);
    }
});
function toggleActive(e, className) {
    var element = e.currentTarget;
    element.classList.toggle(className);
}
function toggleEvent(className, ele) {
    ele.addEventListener(mouseover, function (e) {
        toggleActive(e, className);
    });
    ele.addEventListener(mouseout, function (e) {
        toggleActive(e, className);
    });
}
function handleHomeImg() {
    if (window.innerWidth <= 650) {
        homeImg.src = imgMobile;
        menu.style.display = 'block';
    }
    else {
        homeImg.src = imgDesktop;
        menu.style.display = 'none';
    }
}
window.addEventListener('load', handleHomeImg);
window.addEventListener('resize', handleHomeImg);
menu.addEventListener("click", function () {
    navBoard.classList.add("open-menu");
    menu.style.display = 'none';
});
menuClose.addEventListener("click", function () {
    navBoard.classList.remove("open-menu");
    menu.style.display = 'block';
});
