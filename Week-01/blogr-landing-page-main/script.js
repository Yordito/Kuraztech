document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("nav");
  const scroller = document.querySelector(".scroll");
  const menuIcon = document.getElementById('hamburger-menu');
  const closeIcon = document.getElementById('close-menu');
  const navList = document.querySelector('.nav-list');

  window.addEventListener("scroll", function() {
    nav.classList.toggle("sticky", window.scrollY > 60);
  });

  menuIcon.addEventListener('click', () => {
   
      navList.style.top = "105px"; 
  
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
     navList.style.top = '-1000px'
  });

});
const navToggle = document.getElementById('nav-toggle');
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');

navToggle.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
});
