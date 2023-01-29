// select header
const header = document.querySelector('.header');

// Select nav
const nav = document.querySelector('.nav');
// Nav trigger
const navTrigger = document.querySelector('.header__nav-trigger');

// Open
navTrigger.addEventListener('click', () => {
  nav.classList.toggle('open');
});




// Header background on scroll
window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});