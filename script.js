// Toggle contact information visibility
var contactToggleBtn = document.getElementById('contact-toggle');
var contactInfo = document.getElementById('contact-info');
contactToggleBtn === null || contactToggleBtn === void 0 ? void 0 : contactToggleBtn.addEventListener('click', function () {
    if (contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.classList.contains('hidden')) {
        contactInfo.classList.remove('hidden');
        contactToggleBtn.textContent = 'Hide Contact Info';
    }
    else {
        contactInfo === null || contactInfo === void 0 ? void 0 : contactInfo.classList.add('hidden');
        contactToggleBtn.textContent = 'Show Contact Info';
    }
});
// Toggle experience details visibility
var toggleDetailsButtons = document.querySelectorAll('.toggle-details');
toggleDetailsButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var details = event.target.nextElementSibling;
        if (details === null || details === void 0 ? void 0 : details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            event.target.textContent = 'Hide Details';
        }
        else {
            details === null || details === void 0 ? void 0 : details.classList.add('hidden');
            event.target.textContent = 'Details';
        }
    });
});
