// validation.js
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const zipRegex = /^\d{5}(-\d{4})?$/; 
const stateAbbreviations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

function validateForm() {
    let isValid = true;
    document.querySelectorAll('input[required], select[required]').forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });
    return isValid;
}

function validateInput(input) {
    const type = input.dataset.type || input.type;
    switch (type) {
        case 'email':
            return checkFormat(input, emailRegex);
        case 'tel':
            return checkFormat(input, phoneRegex);
        case 'zipcode':
            return checkFormat(input, zipRegex);
        case 'state':
            return validateState(input);
        default:
            return checkRequired(input);
    }
}

function checkRequired(input) {
    const isValid = input.value.trim() !== '';
    setElementValidity(input, isValid, "This field is required.");
    return isValid;
}

function checkFormat(input, regex) {
    const isValid = regex.test(input.value);
    setElementValidity(input, isValid, "Format is incorrect.");
    return isValid;
}

function validateState(input) {
    const isValid = stateAbbreviations.includes(input.value.toUpperCase());
    setElementValidity(input, isValid, "Invalid state abbreviation.");
    return isValid;
}

function setElementValidity(input, isValid, message) {
    const errorDiv = input.nextElementSibling;
    input.classList.toggle('was-validated', !isValid);
    errorDiv.textContent = isValid ? '' : message;
}
