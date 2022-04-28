///// VARIABLES SELECTED /////
const phoneModalFeatures2 = document.querySelector('.modal__popup2');
const phoneModalFeaturesArrow2 = document.querySelector('#phone__modal--arrow');
const phoneModalFeaturesLink2 = document.querySelector(
  '#modal__phone--company'
);
const navWrappers = document.querySelectorAll('.header__link');
const [features, company] = navWrappers;
const listTwo = document.querySelector('.header__list2');
const arrowImg2 = document.querySelector('#arrowimg2');
const listOne = document.querySelector('.header__list');
const arrowImg = document.querySelector('#arrowimg');
const phoneModalMenu = document.querySelector('.modal__phone');
const phoneModalOpen = document.querySelector('#header-img');
const phoneModalClose = document.querySelector('.modal__phone--close');
const phoneModalFeatures = document.querySelector('.modal__popup');
const phoneModalFeaturesArrow = document.querySelector('.modal__list--img');
const phoneModalFeaturesLink = document.querySelector(
  '#modal__phone--features'
);

///////////////////////////////////

///////////////  PRINCIPAL FUNCTION //////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

/////////////////// FUNCTION WHEN INITS //////////////////////
function initApp() {
  unwrappNav();
  unWrappPhone();
}

////// addEventListeners for unwrapp  ////////
const unwrappNav = function () {
  features.addEventListener('click', changeArrowFeatures);
  company.addEventListener('click', changeArrowCompany);
};
//////// addeventlisteners unwrappPhone
const unWrappPhone = function () {
  phoneModalOpen.addEventListener('click', openPhoneModal);
  phoneModalClose.addEventListener('click', closePhoneModal);
  phoneModalFeaturesLink.addEventListener('click', changePhoneArrowFeatures);
  phoneModalFeaturesLink2.addEventListener('click', phoneModalCompanyArrow);
};

/////////// Hidden class functions //////////////////

//////////////////////////////// addeventlistenerinsidefunctions/////
const changeArrowCompany = function () {
  listTwo.classList.toggle('hidden');
  arrowImg2.src === 'http://127.0.0.1:8080/build/img/icon-arrow-down.svg'
    ? (arrowImg2.src = 'http://127.0.0.1:8080/build/img/icon-arrow-up.svg')
    : (arrowImg2.src = 'http://127.0.0.1:8080/build/img/icon-arrow-down.svg');
};
const changeArrowFeatures = function () {
  listOne.classList.toggle('hidden');
  arrowImg.src === 'http://127.0.0.1:8080/build/img/icon-arrow-down.svg'
    ? (arrowImg.src = 'http://127.0.0.1:8080/build/img/icon-arrow-up.svg')
    : (arrowImg.src = 'http://127.0.0.1:8080/build/img/icon-arrow-down.svg');
};
const openPhoneModal = function () {
  phoneModalMenu.classList.remove('hidden');
};
const closePhoneModal = function () {
  phoneModalMenu.classList.add('hidden');
};
const changePhoneArrowFeatures = function () {
  phoneModalFeatures.classList.toggle('hiddenModal');
  phoneModalFeaturesArrow.src = `build/img/icon-arrow-${
    phoneModalFeatures.classList.contains('hiddenModal') ? 'down' : 'up'
  }.svg`;
};
const phoneModalCompanyArrow = function () {
  phoneModalFeatures2.classList.toggle('hiddenModal');
  phoneModalFeaturesArrow2.src = `build/img/icon-arrow-${
    phoneModalFeatures2.classList.contains('hiddenModal') ? 'down' : 'up'
  }.svg`;
};

////////////////////////////////////////////////////////////
