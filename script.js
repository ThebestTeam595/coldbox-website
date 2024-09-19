const fadeImage = document.getElementById('fadeImage');

const fadeInOnScroll = () => {
    const imagePosition = fadeImage.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (imagePosition < screenPosition) {
        fadeImage.classList.add('visible');
    }
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
