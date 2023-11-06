/**
 * Target: 
 *  add all the links a active-link class when cursor hover the corresponding element.
 *  add a active-button class to read more button
 *  add a toggle button for nav when in mobile device view
 */

const links = document.querySelectorAll("a");
const mouseover = "mouseover",
      mouseout = "mouseout";
const imgDesktop ="assets/images/image-web-3-desktop.jpg";
const imgMobile ="assets/images/image-web-3-mobile.jpg";
const homeImg = document.querySelector(".homeImg") as HTMLImageElement;
const menu = document.querySelector(".menu") as HTMLElement;
const menuClose = document.querySelector(".menu-close");
const navBoard = document.querySelector(".navboard");

links.forEach((link) => {
    if(link.classList.contains("read-more")){
        toggleEvent("active-button", link)
    }
    else{
        toggleEvent("active-link", link);
    }
})

function toggleActive(e:Event, className: string){
       const element =  e.currentTarget as HTMLElement;
        element.classList.toggle(className);
}

function toggleEvent(className:string, ele: Element){
    ele.addEventListener(mouseover, (e) => {
        toggleActive(e, className)
    })
    ele.addEventListener(mouseout, (e) => {
        toggleActive(e, className)
    })
}

function handleHomeImg(){
    if(window.innerWidth <= 650){
        homeImg.src = imgMobile;
        menu!.style.display = 'block';
    }
    else{ 
        homeImg.src = imgDesktop; 
        menu!.style.display = 'none';
    }
}

window.addEventListener('load', handleHomeImg);
window.addEventListener('resize', handleHomeImg);

menu!.addEventListener("click", () => {
    navBoard!.classList.add("open-menu")
    menu!.style.display = 'none';
})
menuClose!.addEventListener("click", () => {
    navBoard!.classList.remove("open-menu");
    menu!.style.display = 'block';

})