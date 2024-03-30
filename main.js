console.log("Script loaded.");


// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
//       const targetSection = document.querySelector(this.getAttribute('href'));
//       targetSection.classList.remove('hidden');
//   });
// });


// document.getElementById('nav-icon').addEventListener('click', function() {
//   document.querySelector('nav ul').classList.toggle('hidden');
// });

document.addEventListener('DOMContentLoaded', function() {
  // Get all nav links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Listen for clicks on each link
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior

          const currentActive = document.querySelector('nav ul li a.active');
          if (currentActive) {
              currentActive.classList.remove('active');
          }
          this.classList.add('active'); // Mark the clicked link as active

          // Get the target section ID from the link's href attribute
          const sectionId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(sectionId);

          // Hide all sections
          document.querySelectorAll('main section').forEach(section => {
              section.classList.add('hidden');
          });

          // Show the target section
          targetSection.classList.remove('hidden');
      });
  });
});

console.log(document.getElementById('theme-toggle'))
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  var themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) {
      console.log('Theme toggle button not found.'); // Helps confirm if the button is not found
      return;
  }

  themeToggle.addEventListener('click', function() {
      const themeStylesheet = document.getElementById('theme-stylesheet');
      if (!themeStylesheet) {
          console.log('Theme stylesheet link not found.'); // New check
          return;
      }
      console.log("Current theme href:", themeStylesheet.href); // Debug log

      if (themeStylesheet.href.includes('theme.css')) {
          themeStylesheet.href = 'css/main.css';
      } else {
          themeStylesheet.href = 'css/theme.css';
      }

      console.log("New theme href:", themeStylesheet.href); // Debug log
  });
});



