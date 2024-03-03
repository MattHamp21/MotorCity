document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.classList.remove('hidden');
  });
});


document.getElementById('nav-icon').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('hidden');
});


