let getElementsInArea = (function (docElm) {
  var viewportHeight = docElm.clientHeight;
  return function (e, opts) {
    var found = [],
      i;
    if (e && e.type == "resize") viewportHeight = docElm.clientHeight;
    for (i = opts.elements.length; i--; ) {
      var elm = opts.elements[i],
        pos = elm.getBoundingClientRect(),
        topPerc = (pos.top / viewportHeight) * 100,
        bottomPerc = (pos.bottom / viewportHeight) * 100,
        middle = (topPerc + bottomPerc) / 2,
        inViewport = middle > opts.zone[1] && middle < 100 - opts.zone[1];
      elm.classList.toggle(opts.markedClass, inViewport);
      if (inViewport) found.push(elm);
    }
  };
})(document.documentElement);
////////////////////////////////////
// How to use:
window.addEventListener("scroll", f);
window.addEventListener("resize", f);

function f(e) {
  getElementsInArea(e, {
    elements: document.querySelectorAll(".block-scroll"),
    markedClass: "active",
    zone: [20, 20], // percentage distance from top & bottom
  });
  getElementsInArea(e, {
    elements: document.querySelectorAll(".block-scroll"),
    markedClass: "active-2",
    zone: [40, 40], // percentage distance from top & bottom
  });
}
