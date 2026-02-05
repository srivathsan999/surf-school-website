/**
 * Animations using GSAP
 * Handles scroll reveals and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded. Animations disabled.');
        return;
    }

    // Register ScrollTrigger if available (assumed loaded via CDN)
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from(heroContent.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // Section Reveal on Scroll
    const revealSections = document.querySelectorAll('.reveal-on-scroll');
    revealSections.forEach(section => {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.fromTo(section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        } else {
            // Fallback Intersection Observer if ScrollTrigger missing
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, { y: 0, opacity: 1, duration: 0.8 });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(section);
        }
    });

    // Staggered Cards
    const cardGrids = document.querySelectorAll('.card-grid-stagger');
    cardGrids.forEach(grid => {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from(grid.children, {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: grid,
                    start: "top 85%"
                }
            });
        }
    });
});
