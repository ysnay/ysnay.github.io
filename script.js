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
      days.forEach(d => d.classList.remove('active')); // Remove active from others
      day.classList.add('active'); // Highlight current day
      content.forEach(block => {
        block.style.display = block.style.display === 'none' ? 'block' : 'none';
      });
    });
    if (window.innerWidth <= 600) {
      content.forEach(block => block.style.display = 'none');
    }
  });

  // Smooth Scroll with Debounce
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

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

  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  }

  // Back-to-Top Button
  const backToTop = document.querySelector('.back-to-top');
  const toggleBackToTop = debounce(() => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, 100);

  window.addEventListener('scroll', toggleBackToTop);
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});