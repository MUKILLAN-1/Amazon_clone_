const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}


changeslide();

prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n = n - 1;
    } else {
        n = imgs.length - 1; 
    }
    changeslide();
});

next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n = n + 1;
    } else {
        n = 0; 
    }
    changeslide();
});


const scrollcontainers = document.querySelectorAll('.products');

for (const item of scrollcontainers) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
// script.js

const sliderImages = document.querySelectorAll('.header-slider ul img');
let currentSlide = 0;

function showSlide(index) {
    sliderImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelector('.control_prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
});

document.querySelector('.control_next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
});


setInterval(() => {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
}, 5000); 


showSlide(currentSlide);
document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`You searched for: ${this.value}`);
    }
});

