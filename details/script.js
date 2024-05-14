let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    const translateValue = slideIndex * -100;
    document.querySelector('.slides').style.transform = `translateX(${translateValue}%)`;
}

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    slideIndex = slideIndex;
}

document.querySelectorAll('.mini-pictures img').forEach((miniPic, index) => {
    miniPic.addEventListener('click', () => {
        changeSlide(index);
    });
});
