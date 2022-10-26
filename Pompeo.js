"use strict"

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header_list');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}