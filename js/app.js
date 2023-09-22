let slideIndex = 0;
showSlide();

function showSlide() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 3000);

}

//Menu Icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

}
