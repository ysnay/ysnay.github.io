document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu ul li a");
    
    // Toggle Menu Visibility
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // Toggle Hamburger Icon (☰ to ✖)
        if (navMenu.classList.contains("active")) {
            menuToggle.innerHTML = "✖";
        } else {
            menuToggle.innerHTML = "☰";
        }
    });

    // Close Menu When Clicking a Link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "☰";
        });
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active");
            menuToggle.innerHTML = "☰";
        }
    });

    // Smooth Scrolling for Anchor Links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });
});