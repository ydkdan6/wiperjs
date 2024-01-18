const header = document.querySelector('header');

window.addEventListener('scroll',function() {
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

}

    document.addEventListener('DOMContentLoaded', function () {
        const sliderContainer = document.querySelector('.slider-container');
        const sliderItems = document.querySelectorAll('.slider-item');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;

        function updateSlider() {
            const newTransformValue = -currentIndex * 100 + '%';
            sliderContainer.style.transform = 'translateX(' + newTransformValue + ')';
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            updateSlider();
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        }

        prevButton.addEventListener('click', showPrevSlide);
        nextButton.addEventListener('click', showNextSlide);
    });

