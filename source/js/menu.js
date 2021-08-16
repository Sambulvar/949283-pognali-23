let siteList = document.querySelector('.site-list');
let buttonSiteList = document.querySelector('.main-nav__toggle');
let pageHeader = document.querySelector('.page-header');
buttonSiteList.addEventListener('click',function(){
  if (siteList.classList.contains('visually-hidden')) {
    siteList.classList.remove('visually-hidden');
    logo.classList.remove('page-header--site-list');
  } else {
    siteList.classList.add('visually-hidden');
    pageHeader.classList.add('page-header--site-list');
  }
});
