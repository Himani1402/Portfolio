// Main JavaScript File

document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 500);
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Set dark theme as default, check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
    } else {
        // Dark theme is default, no class needed
        localStorage.setItem('theme', 'dark');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('light-theme');

        // Save theme preference
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
        let current = '';

        // Check if we're at the top of the page for Home link
        if (window.scrollY < 200) {
            current = 'home';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Set first nav item as active by default since we removed Discover
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }

    // Typed.js for typing animation
    if (document.querySelector('.typed-text')) {
        const options = {
            strings: ['Network Engineer', 'Developer', 'QA Engineer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        };

        const typed = new Typed('.typed-text', options);
    }

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }

                // Add animation
                setTimeout(() => {
                    card.classList.add('animate', 'fade-in');
                }, 100);
            });
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });

            // Show success message (in a real app, do this after successful submission)
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }

    // Skills Dropdown Functionality
    const skillDropdowns = document.querySelectorAll('.skill-dropdown');

    skillDropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');

        header.addEventListener('click', function () {
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Ensure page starts at top on refresh
    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    // Force scroll to top on page load
    window.addEventListener('load', function () {
        window.scrollTo(0, 0);
    });

    // Initialize Scroll Animations
    initScrollAnimations();

    // Show all projects by default
    showAllProjects();
});

// Function to show all projects by default
function showAllProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.display = 'block';
        // Add animation
        setTimeout(() => {
            card.classList.add('animate', 'fade-in');
        }, 100);
    });
}

// Scroll Animation Function
function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animation');
    const sections = document.querySelectorAll('.section');

    const checkPosition = () => {
        // Animate sections
        sections.forEach(section => {
            const positionFromTop = section.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= -100) {
                section.classList.add('animate');
            }
        });

        // Animate other elements
        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= -100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Check position initially
    checkPosition();

    // Animate home section immediately
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        homeSection.classList.add('animate');
    }
}