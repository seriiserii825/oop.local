import fixedScroll from "./modules/fixedScroll";
import googleMap from "./modules/map";
import contactForm from "./modules/form";
import { mainMenu } from "./modules/mainMenu";

document.addEventListener("DOMContentLoaded", function() {
  fixedScroll();
  googleMap();
  contactForm();
  mainMenu();
});
