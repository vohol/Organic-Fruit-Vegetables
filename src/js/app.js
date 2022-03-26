import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const scene = document.getElementById('scene');
const parallax = new Parallax(scene);

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
  if (target.closest('.header__navigation') || target.closest('.header__reg-btn')) {
    headerBurger.classList.remove('active')
    headerNavigation.classList.remove('active')
    headerLogo.classList.remove('active')
    headerRegBtn.classList.remove('mobile')
  }
  if (!target.closest('.header__navigation') && !target.closest('.header__burger-wrapper')) {
    headerBurger.classList.remove('active')
    headerNavigation.classList.remove('active')
    headerLogo.classList.remove('active')
    headerRegBtn.classList.remove('mobile')
  }
}

const counters = document.querySelectorAll('.hero__counter-item')
const reviewItems = document.querySelectorAll('.hero__review-item')


window.addEventListener('load', addOpacity)

function addOpacity() {
  reviewItems.forEach(element => {
    element.classList.add('not-opacity')
    
  });
}

window.addEventListener('load', handlerCounters)

function handlerCounters(event) {

  counters.forEach(element => {
    if (element.classList.contains('order-user')) {
      counter(element, 30)
    }
    if (element.classList.contains('reviews')) {
      counter(element, 20)
    }
    if (element.classList.contains('items')) {
      counter(element, 300, 50)
    }
  });

}

function counter(element, max, interval=100) {
  let counter = 0;
  let countFunction = setInterval(function () {
    max > 100 ? counter +=10 : counter +=2
    element.textContent = counter

    if (counter == max * 0.8) {
      clearInterval(countFunction)

      let slowerCountFunction = setInterval(function () {
        max > 100 ? counter +=5 : counter ++
        element.textContent = counter

        if (counter >= max ) {
          clearInterval(slowerCountFunction)

        }
      }, interval * 2)
    }
  }, interval)
}