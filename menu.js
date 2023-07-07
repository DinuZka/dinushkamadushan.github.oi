let hamburger = document.querySelector(".hamburger");
let menu_container = hamburger.parentElement;

hamburger.addEventListener('click', () => {
    if (menu_container.classList.contains("show-menu")) {
        menu_container.classList.remove("show-menu");
    } else {
        menu_container.classList.add("show-menu");
    }
});
