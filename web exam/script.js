// External JS: script.js

// Nav toggle for small screens
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.nextElementSibling;
    if (nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Simple slider
(function(){
  const slidesEl = document.querySelector('.slides');
  if (!slidesEl) return;
  const images = slidesEl.querySelectorAll('img');
  let index = 0;
  const total = images.length;
  const update = () => {
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
  };
  document.getElementById('prev')?.addEventListener('click', ()=> {
    index = (index - 1 + total) % total; update();
  });
  document.getElementById('next')?.addEventListener('click', ()=> {
    index = (index + 1) % total; update();
  });
  // autoplay
  setInterval(()=> { index = (index + 1) % total; update(); }, 5000);
})();

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    const errors = [];
    if (name.length < 3) errors.push('Name must be at least 3 characters.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email.');
    if (message.length < 10) errors.push('Message must be at least 10 characters.');
    if (errors.length) {
      alert('Please fix:\n' + errors.join('\n'));
      return;
    }
    // simulate sending
    alert('Message sent! (simulation) Thank you, ' + name + '.');
    form.reset();
  });
}

// Accessibility: allow keyboard navigation for slider buttons
document.querySelectorAll('.slider-btn').forEach(btn => {
  btn.setAttribute('tabindex','0');
});
