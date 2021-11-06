import { bodyVisible } from "./bodyHidden";

export default function fixedScroll() {
  const header = document.querySelector('.main-header');
  const menuLinks = document.querySelectorAll('#js-main-menu a');
  const menuItems = document.querySelectorAll('#js-main-menu li');
  const mainMenu = document.querySelector('#js-main-menu');
  const sandwitchWrap = document.querySelector('#js-sandwitch-wrap');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      header.classList.add('fixed-scroll');
    } else {
      header.classList.remove('fixed-scroll');
    }
  })
  
  function addClass(index) {
    menuItems[index].classList.add('current-menu-item');
  }
  
  function removeClass() {
    menuItems.forEach((item) => {
      item.classList.remove('current-menu-item');
    });
  }

  menuLinks.forEach((item, index) => {
    item.addEventListener('click', function () {
      removeClass();
      addClass(index);
      mainMenu.classList.remove("fixed");
      bodyVisible();
      sandwitchWrap.classList.toggle("sandwitch--active");
    });
  });
}
