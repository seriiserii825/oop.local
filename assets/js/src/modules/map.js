export default function googleMap() {
  const mapDiv = document.querySelector('#map');
  const iframe = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.6342906113146!2d8.051748251581197!3d45.55768187899966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620d95abf4b8f%3A0xf4faecb88db8a8f0!2sVia%20Galimberti%20Tancredi%2C%2017%2C%2013900%20Biella%20BI%2C%20Italia!5e0!3m2!1sit!2s!4v1619423547914!5m2!1sit!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
	`;
  if (document.body.classList.contains('home')) {
    setTimeout(() => {
      mapDiv.innerHTML = iframe;
    }, 2000);
  } else {
    mapDiv.innerHTML = iframe;
  }
  
}
