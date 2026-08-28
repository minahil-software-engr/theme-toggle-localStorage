const themeToggleBtn = document.getElementById('themeToggleBtn');
function applyInlineTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#333333';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyInlineTheme(savedTheme);
});
themeToggleBtn.addEventListener('click', () => {
  const currentBg = document.body.style.backgroundColor;
  const isDark = currentBg === 'rgb(18, 18, 18)' || currentBg === '#121212';
  const newTheme = isDark ? 'light' : 'dark';
  
  applyInlineTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});