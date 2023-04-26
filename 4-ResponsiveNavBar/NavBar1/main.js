let nav_bar = document.querySelector(".navbar");
let menu_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menu_btn.addEventListener('click', () => {
    nav_bar.classList.add('active2');
})

close_btn.addEventListener('click', () => {
    nav_bar.classList.remove('active2')
})