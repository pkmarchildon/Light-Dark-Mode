const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleLayoutMode = document.getElementById('toggle-icon');
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
      localStorage.setItem('theme', 'dark');
      toggleThemeMode(false);
   } else {
      // Toggle is not active, light mode
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleThemeMode(true);
   }
}

function toggleThemeMode(isLight) {
   navBar.style.backgroundColor = isLight
      ? 'rgb(255 255 255 / 50%)'
      : 'rgb(0 0 0 / 50%)';
   buttonsTextBox.style.backgroundColor = isLight
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(255, 255, 255, 0.5)';
   toggleLayoutMode.children[0].textContent = isLight
      ? 'Dark Mode'
      : 'Light Mode';
   toggleLayoutMode.children[1].className = isLight
      ? 'fas fa-moon'
      : 'fas fa-sun';
   isLight ? changePictures('light') : changePictures('dark');
}

function changePictures(mode) {
   aboutImage1.src = `/img/undraw_proud_coder_${mode}.svg`;
   aboutImage2.src = `/img/undraw_feeling_proud_${mode}.svg`;
   aboutImage3.src = `/img/undraw_conceptual_idea_${mode}.svg`;
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme. Always have to check if the key exists.
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
   document.documentElement.setAttribute('data-theme', currentTheme);
   if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      toggleThemeMode(false);
   }
}
