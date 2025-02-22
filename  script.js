document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  
      // Change the hamburger icon to "X" when the menu is open
      if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✖"; // Cross icon
      } else {
        menuToggle.innerHTML = "☰"; // Hamburger icon
      }
    });
  });