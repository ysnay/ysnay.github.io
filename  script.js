document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu ul li a");

    // Function to toggle menu visibility
    function toggleMenu() {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.innerHTML = isOpen ? "✖" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    }

    // Function to close the menu
    function closeMenu() {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
    }

    // Toggle menu on click
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event bubbling
        toggleMenu();
    });

    // Close menu when clicking outside
    document.body.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    });

    // Close menu when clicking a nav link & smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector("header").offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 10, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
            closeMenu(); // Ensure menu closes on selection
        });
    });
});