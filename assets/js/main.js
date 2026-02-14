/**
 * Main Javascript functionality
 * Navbar toggle, sticky header, global interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Scroll to Top Functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle') || document.getElementById('menu-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu') || document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    if (mobileMenuToggle && mobileNavMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');

            // Toggle body scroll
            const isActive = mobileNavMenu.classList.contains('active');
            document.body.style.overflow = isActive ? 'hidden' : '';

            // Toggle Icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        const closeMenu = () => {
            mobileNavMenu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';

            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        };

        if (overlay) overlay.addEventListener('click', closeMenu);

        // Close menu on link click
        const navLinks = mobileNavMenu.querySelectorAll('a:not(.submenu-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Submenu toggle for mobile
    const submenuToggles = document.querySelectorAll('.submenu-toggle, .dropdown-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Only apply on mobile/tablet views (below lg 992px or based on menu state)
            if (window.innerWidth < 1200) {
                e.preventDefault();
                const submenu = toggle.nextElementSibling;
                const icon = toggle.querySelector('i');
                if (submenu) {
                    const isHidden = submenu.style.display === 'none' || submenu.style.display === '';
                    submenu.style.display = isHidden ? 'block' : 'none';
                    if (icon) {
                        icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                        icon.style.transition = 'transform 0.3s ease';
                    }
                }
            }
        });
    });

    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .navbar-nav-wrapper a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

});

// Global scroll function (referenced by some older onclick attributes)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
