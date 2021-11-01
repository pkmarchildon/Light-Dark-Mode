const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleText = document.querySelector('span[class="toggle-text"]');
const toggleIcon = document.querySelector('span#toggle-icon i');
const aboutImage1 = document.getElementById('image1');
const aboutImage2 = document.getElementById('image2');
const aboutImage3 = document.getElementById('image3');
const navBar = document.getElementById('nav');
const buttonsTextBox = document.getElementById('text-box');

// Switch theme dinamically
function switchTheme(event) {
   if (event.target.checked) {
      // Toggle is active, dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitchDarkMode();
      changePicturesDarkMode();
      changeNavbarBackgroundDarkMode();
      changeTextBoxBackgroundDarkMode();
   } else {
      // Toggle is not active, light mode
      document.documentElement.setAttribute('data-theme', 'light');
      toggleSwitchLightMode();
      changePicturesLightMode();
      changeNavbarBackgroundLightMode();
      changeTextBoxBackgroundLightMode();
   }
}

function toggleSwitchDarkMode() {
   toggleText.textContent = 'Light Mode';
   toggleIcon.className = 'fas fa-sun';
}

function toggleSwitchLightMode() {
   toggleText.textContent = 'Dark Mode';
   toggleIcon.className = 'fas fa-moon';
}

function changePicturesDarkMode() {
   aboutImage1.setAttribute('src', '/img/undraw_proud_coder_dark.svg');
   aboutImage2.setAttribute('src', '/img/undraw_feeling_proud_dark.svg');
   aboutImage3.setAttribute('src', '/img/undraw_conceptual_idea_dark.svg');
}

function changePicturesLightMode() {
   aboutImage1.setAttribute('src', '/img/undraw_proud_coder_light.svg');
   aboutImage2.setAttribute('src', '/img/undraw_feeling_proud_light.svg');
   aboutImage3.setAttribute('src', '/img/undraw_conceptual_idea_light.svg');
}

function changeNavbarBackgroundDarkMode() {
   navBar.style.background = 'rgb(255 255 255 / 10%)';
}

function changeNavbarBackgroundLightMode() {
   navBar.style.background = 'rgb(255 255 255 / 50%)';
}

function changeTextBoxBackgroundDarkMode() {
   buttonsTextBox.style.background = 'rgba(255, 255, 255, 0.9)';
}

function changeTextBoxBackgroundLightMode() {
   buttonsTextBox.style.background = 'rgb(0, 0, 0, 0.5)';
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);
