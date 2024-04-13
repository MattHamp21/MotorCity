
function setupPageTransitions() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          document.querySelectorAll('section').forEach(section => {
              section.classList.add('hidden');
          });
          targetSection.classList.remove('hidden');
      });
  });
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      const themeStylesheet = document.getElementById('theme-stylesheet');
      themeStylesheet.href = themeStylesheet.href.includes('theme.css') ? 'css/main.css' : 'css/theme.css';
  });
}
