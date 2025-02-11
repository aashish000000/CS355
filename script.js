// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

const applyDarkMode = (enable) => {
  document.body.classList.toggle('dark-mode', enable);
  localStorage.setItem('darkMode', enable);
};

darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  applyDarkMode(isDarkMode);
});

// Apply saved dark mode on page load
applyDarkMode(isDarkMode);

// Page 2: Parse and Display Form Data
if (window.location.pathname.includes('page2.html')) {
  const resultsContainer = document.getElementById('results');
  const params = new URLSearchParams(window.location.search);

  const displayData = () => {
    params.forEach((value, key) => {
      const row = document.createElement('div');
      row.classList.add('result-row');
      row.innerHTML = `<strong>${key}:</strong> ${value}`;
      resultsContainer.appendChild(row);
    });
  };

  displayData();
}