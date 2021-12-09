// White nav bg on scroll

window.onscroll = () => {
  const nav = document.querySelector('nav');
    if(this.scrollY <= 40) {
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
