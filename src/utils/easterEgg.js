let easterEggCode = '';

const PURPLE_THEMES = new Set(['purple', 'purple-dark']);

const activateEasterEgg = () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');

  if (PURPLE_THEMES.has(current)) {
    html.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    return;
  }

  const base = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', base === 'dark' ? 'purple-dark' : 'purple');
};

const handleKeyPress = (event) => {
  easterEggCode += event.key;
  if (easterEggCode.endsWith('purple')) {
    activateEasterEgg();
    easterEggCode = '';
  }

  if (easterEggCode.length > 10) {
    easterEggCode = easterEggCode.slice(-10);
  }
};

export const initEasterEgg = () => {
  window.addEventListener('keypress', handleKeyPress);
};

export const cleanupEasterEgg = () => {
  window.removeEventListener('keypress', handleKeyPress);
};
