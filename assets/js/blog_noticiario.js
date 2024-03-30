/* eslint-disable linebreak-style */
function fadeInOnScroll() {
  const fadeElements = document.querySelectorAll('.noticiario li');

  fadeElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (elementTop < windowHeight + scrollPosition) {
      element.style.transition = `opacity 0.5s ease-out ${
        index * 0.5
      }s, transform 0.5s ease-out ${
        index * 0.5
      }s`;
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    } else {
      element.style.transition = '';
      element.style.opacity = 0;
      element.style.transform = 'translateY(40px)';
    }
  });
}

document.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
