/*Добавление класса active для меню в мобилках*/
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuList = document.querySelector(".menu__links-wrap");
const menuLogo = document.querySelector(".menu__logo");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    menuList.classList.toggle("_active");
    menuLogo.classList.toggle("_active");
  });
}
