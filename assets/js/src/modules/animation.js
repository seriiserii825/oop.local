import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function gsapAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  
  function headerIntro() {
    let tl = gsap.timeline();
    tl.fromTo('.home-intro__content', {
      y: -800,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out"
    });
    tl.fromTo('.home-intro__img', {
      x: 800,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power4.out"
    }, "-=2.5");
    tl.fromTo('.block-services', {
      y: 1000,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power4.out"
    }, "-=3");
  }
  
  if (document.querySelector('.home-intro__content')) {
    headerIntro();
  }
  
  function fadeBlock() {
    gsap.from('.fade-block', {
      y: 100,
      opacity: 0,
      duration: 5,
      scrollTrigger: {
        start: "top: 80%",
        trigger: ".fade-block",
      },
    });
  }
  
  if(document.querySelector('.fade-block')){
    fadeBlock();
  }
  
  function teamAnimation() {
    gsap.from(".team__item", {
      scrollTrigger: {
        start: "top: 100%",
        trigger: ".team__item",
      },
      rotateY: 90,
      duration: 5,
      stagger: .8
    });
  }
  
  if (document.querySelector('.team__item')) {
    teamAnimation();
  }
};
