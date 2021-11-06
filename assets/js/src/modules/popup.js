import { bodyHidden, bodyVisible } from "./bodyHidden";

export default function popup() {
  const buttons = document.querySelectorAll(".show-popup");
  const closePopupButtons = document.querySelectorAll('.popup__close');
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target;
      const targetId = "#" + target.getAttribute("data-target");
      const popupStr = `${targetId}`;
      const popup = document.querySelector(popupStr);
      popup.classList.add('active');
      bodyHidden();
    });
  });

  function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      popup.classList.remove('active');
    })
    bodyVisible();
  }

  closePopupButtons.forEach(button => {
    button.addEventListener('click', e => {
      closePopup();
    });
  });

  document.querySelectorAll('.popup input[type="submit"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const formHtml = e.target.closest('form');
      setTimeout(() => {
        const formAttribute = formHtml.getAttribute('data-status');
        if (formAttribute === 'sent') {
          closePopup();
        }
      }, 3000);
    });
  })

}
