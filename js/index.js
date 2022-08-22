
// Modal Window

const worksItems = document.querySelectorAll(".works-item-top");
const modalWindowContainer = document.querySelector(".modal-window-container");
const modalWindow = document.querySelector(".modal-window");
const modalWindowNext = document.querySelector(".modal-window-next");
const modalWindowPrev = document.querySelector(".modal-window-prev");


let index = 0;

// Open
worksItems.forEach((item) => {
    item.addEventListener("click", () => {
        modalWindow.style.backgroundImage = `url(${document.getElementById(1).src})`;
        index = 1;
        modalWindowContainer.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

// Close
document.querySelector(".modal-window-close").addEventListener("click", () => {
    modalWindowContainer.style.display = "none";
    document.body.style.overflow = "auto";
});

// Next 
modalWindowNext.addEventListener("click", () => {
    if (index == 11) {
        index = 0;
    }
    index++;

    modalWindow.style.backgroundImage = `url(${document.getElementById(index).src})`;
});

// Prev
modalWindowPrev.addEventListener("click", () => {
    if (index == 1) {
        index = 12;
    }
    index -= 1;
    modalWindow.style.backgroundImage = `url(${document.getElementById(index).src})`;
});

// Gallery click

const modalWindowSliderItems = document.querySelectorAll(".modal-window-slider-item img");

modalWindowSliderItems.forEach((item) => {
    item.addEventListener("click", () => {
        modalWindow.style.backgroundImage = `url(${item.src})`;
        console.log("click")
        index = item.id;
    });
});

// Modal Window Slider
let isMove = false;
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.modal-window-slider-inner');

function end() {
    isDown = false;
    slider.classList.remove('active');
}

function start(e) {
    isDown = true;
    isMove = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function move(e) {
    if(!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
}

slider.addEventListener('mousedown', start);
slider.addEventListener('touchstart', start);

slider.addEventListener('mousemove', move);
slider.addEventListener('touchmove', move);

slider.addEventListener('mouseleave', end);
slider.addEventListener('mouseup', end);
slider.addEventListener('touchend', end);

