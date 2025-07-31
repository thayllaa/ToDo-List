export function applyInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

export function toggleTheme(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}