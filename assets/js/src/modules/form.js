export default function contactForm() {
  const formItems = document.querySelectorAll('.form-group input[type="text"], .form-group input[type="email"], .form-group input[type="tel"], .form textarea');
  const formGroupItems = document.querySelectorAll('.form-group');
  formItems.forEach(item => {
    item.addEventListener('focus', function (e) {
      formGroupItems.forEach(item => {
        item.classList.remove('active');
      });
      e.target.closest('.form-group').classList.add('active');
    });
  });
  
}
