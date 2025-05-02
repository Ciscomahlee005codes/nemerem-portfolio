// Toogle Switcher
const styleSwicherToggle = document.querySelector('.style-switcher-toggler');
styleSwicherToggle.addEventListener('click',() =>{
    document.querySelector('.style-switcher').classList.toggle('open')
})
// Hiding Stle switch onscroll
window.addEventListener('scroll', () =>{
    if ( document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

// Theme Colors
const alternateStyles = document.querySelectorAll('.alternate-style');
 const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
   if (color ===style.getAttribute('title')) {
     style.removeAttribute('disabled');
   }
   else{
    style.setAttribute('disabled', 'true');
   }
  })
 }

//  Theme Light and Darkness
const dayNight = document.querySelector('.day-night');
const logoImg = document.getElementById('logo-img');

// Paths to your logos
const lightLogo = 'Images/20250422_212150-removebg-preview.png'; // for light mode
const darkLogo = 'Images/logo-2-removebg-preview.png'; // for dark mode (use your light version)

dayNight.addEventListener('click', () => {
  const icon = dayNight.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    logoImg.src = darkLogo;
  } else {
    logoImg.src = lightLogo;
  }
});

// On page load, set correct icon and logo
window.addEventListener('load', () => {
  const icon = dayNight.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.add('fa-sun');
    logoImg.src = darkLogo;
  } else {
    icon.classList.add('fa-moon');
    logoImg.src = lightLogo;
  }
});

