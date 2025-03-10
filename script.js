document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.textContent = navList.classList.contains('active') ? '✕' : '☰';
  });

  // Collapsible Itinerary Days
  const days = document.querySelectorAll('.day');
  days.forEach(day => {
    const title = day.querySelector('h3');
    const content = day.querySelectorAll('.time-block');

    title.addEventListener('click', () => {
      content.forEach(block => {
        block.style.display = block.style.display === 'none' ? 'block' : 'none';
      });
    });

    // Hide content by default on mobile
    if (window.innerWidth <= 600) {
      content.forEach(block => block.style.display = 'none');
    }
  });

  // Smooth Scroll for Navigation
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 600) {
        navList.classList.remove('active');
        hamburger.textContent = '☰';
      }
    });
  });
});