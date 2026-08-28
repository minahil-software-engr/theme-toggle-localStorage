const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
  // Step 1: Remove theme key from LocalStorage
  localStorage.removeItem('theme');
  
  // Step 2: Reload page to restore initial state
  location.reload();
});