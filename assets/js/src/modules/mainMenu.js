import { bodyHidden, bodyVisible } from "./bodyHidden";

export function mainMenu() {
  const mainMenu = document.querySelector('#js-main-menu');
  const sandwichWrap = document.querySelector('#js-sandwitch-wrap');
  sandwichWrap.addEventListener('click', function(e) {
    if (mainMenu.classList.contains('fixed')) {
      mainMenu.classList.remove('fixed');
      bodyVisible();
    } else {
      mainMenu.classList.add('fixed');
      bodyHidden();
    }
    sandwichWrap.classList.toggle('sandwitch--active');
  });
}