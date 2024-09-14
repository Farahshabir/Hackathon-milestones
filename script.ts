// Toggle contact information visibility
const contactToggleBtn = document.getElementById('contact-toggle');
const contactInfo = document.getElementById('contact-info');

contactToggleBtn?.addEventListener('click', () => {
  if (contactInfo?.classList.contains('hidden')) {
    contactInfo.classList.remove('hidden');
    contactToggleBtn.textContent = 'Hide Contact Info';
  } else {
    contactInfo?.classList.add('hidden');
    contactToggleBtn.textContent = 'Show Contact Info';
  }
});

// Toggle experience details visibility
const toggleDetailsButtons = document.querySelectorAll('.toggle-details');

toggleDetailsButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const details = (event.target as HTMLElement).nextElementSibling;
    if (details?.classList.contains('hidden')) {
      details.classList.remove('hidden');
      (event.target as HTMLElement).textContent = 'Hide Details';
    } else {
      details?.classList.add('hidden');
      (event.target as HTMLElement).textContent = 'Details';
    }
  });
});
