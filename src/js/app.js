import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const headerBurger = document.querySelector('.header__burger')
const headerNavigation = document.querySelector('.header__navigation')
const headerLogo = document.querySelector('.header__logo')
const headerRegBtn = document.querySelector('.header__reg-btn')

document.addEventListener('click', openMobileMenu);

function openMobileMenu (event) {
  const target = event.target;

  if (target.closest('.header__burger-wrapper')) {
    headerBurger.classList.toggle('active')
    headerNavigation.classList.toggle('active')
    headerLogo.classList.toggle('active')
    headerRegBtn.classList.toggle('mobile')
  }
}