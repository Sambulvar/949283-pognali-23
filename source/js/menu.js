let mainNav = document.querySelector('.main-nav');
let pageHeader = document.querySelector('.page-header');
let logo = document.querySelector('.logo');
let toggle = document.querySelector('.page-header__toggle')
let backgroundTraveller = document.querySelector('.background-traveller');
toggle.addEventListener('click',function(){
  if (mainNav.classList.contains('visually-hidden')) {
    mainNav.classList.remove('visually-hidden');
    pageHeader.classList.add('page-header--nav-active');
    logo.classList.add('logo--nav-active');
    toggle.classList.add('page-header__toggle--nav-active');
    backgroundTraveller.classList.add('background-traveller--nav-active');
  } else {
    mainNav.classList.add('visually-hidden');
    pageHeader.classList.remove('page-header--nav-active');
    logo.classList.remove('logo--nav-active');
    toggle.classList.remove('page-header__toggle--nav-active');
    backgroundTraveller.classList.remove('background-traveller--nav-active');
  }
});
