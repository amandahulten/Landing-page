// White nav bg on scroll

window.onscroll = () => {
  const nav = document.querySelector('nav');
  if (this.scrollY <= 40) {
    nav.className = '';
  } else {
    nav.className = 'scroll';
  }
};

// Marquee text effect

Marquee3k.init({
  selector: 'marquee',
});
window.addEventListener('load', (event) => {
  Marquee3k.refreshAll();
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.mobile_nav');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', mobileMenu);
