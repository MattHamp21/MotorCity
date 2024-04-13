console.log("Script loaded.");

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const currentActive = document.querySelector('nav ul li a.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');

            const sectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);

            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });

            targetSection.classList.remove('hidden');
        });
    });

    setupFormValidation();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    var themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.log('Theme toggle button not found.');
        return;
    }

    themeToggle.addEventListener('click', function() {
        const themeStylesheet = document.getElementById('theme-stylesheet');
        if (!themeStylesheet) {
            console.log('Theme stylesheet link not found.');
            return;
        }
        console.log("Current theme href:", themeStylesheet.href);

        if (themeStylesheet.href.includes('theme.css')) {
            themeStylesheet.href = 'css/main.css';
        } else {
            themeStylesheet.href = 'css/theme.css';
        }

        console.log("New theme href:", themeStylesheet.href);
    });
});

function setupFormValidation() {
    const form = document.getElementById('visitorForm');
    if (!form) {
        console.error("Visitor form not found");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (validateForm()) {
            this.classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
        } else {
            displayFormErrors(); 
        }
    });

    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });
}

function validateForm() {
    console.log('Validating form...');
    return document.getElementById('visitorForm').checkValidity(); 
}

function displayFormErrors() {
    console.log('Displaying form errors...');
}

function validateInput(input) {
    if (!input.value.trim()) {
        input.classList.add('error');
        console.log('Error in input: ' + input.name);
    } else {
        input.classList.remove('error');
    }
}
