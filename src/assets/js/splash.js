import '../styles/splash.css';

const splashScreen = document.querySelector('.splash');
const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {
    splashScreen.classList.add('hidden');
  }, 610);
});
