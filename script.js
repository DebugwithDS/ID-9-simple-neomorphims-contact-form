const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (name && email && subject && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  } else {
    alert('Please fill in all fields!');
  }
});

submitBtn.addEventListener('mouseenter', () => {
  submitBtn.style.backgroundColor = '#3a5bbf';
});

submitBtn.addEventListener('mouseleave', () => {
  submitBtn.style.backgroundColor = '#4d79f6';
});
