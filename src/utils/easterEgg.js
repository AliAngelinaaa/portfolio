let easterEggCode = '';

const activateEasterEgg = () => {
  document.body.classList.toggle('pastel-purple-theme');
};

const handleKeyPress = (event) => {
  easterEggCode += event.key;
  if (easterEggCode.endsWith('purple')) {
    activateEasterEgg();
    easterEggCode = '';
  }
};

export const initEasterEgg = () => {
  window.addEventListener('keypress', handleKeyPress);
};

export const cleanupEasterEgg = () => {
  window.removeEventListener('keypress', handleKeyPress);
};
