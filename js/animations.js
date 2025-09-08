// Animations JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

// Function to add animation classes to elements
function addAnimationClasses() {
    // Home section animations
    document.querySelectorAll('.home-section .social-icon').forEach((icon, index) => {
        icon.classList.add('animate', 'fade-in', `delay-${index + 1}`);
    });
    
    // About section animations
    const aboutElements = document.querySelectorAll('.about-section h2, .about-section .about-image, .about-section h3, .about-section p, .about-section .personal-info, .about-section .btn');
    aboutElements.forEach(element => {
        element.classList.add('scroll-animation');
    });
    
    // Skills section animations
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.classList.add('scroll-animation');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Projects section animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('scroll-animation');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Contact section animations
    const contactElements = document.querySelectorAll('.contact-section h2, .contact-item, .contact-form');
    contactElements.forEach((element, index) => {
        element.classList.add('scroll-animation');
        element.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Function to initialize scroll reveal animations
function initScrollReveal() {
    const sections = document.querySelectorAll('section');
    const resumeItems = document.querySelectorAll('.resume-item');
    
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 150) {
                section.classList.add('active');
                
                // If this is the resume section, animate its items
                if (section.classList.contains('resume-section')) {
                    animateResumeItems();
                }
            }
        });
    };
    
    window.addEventListener('scroll', revealSection);
    window.addEventListener('load', revealSection);
    
    // Separate observer for resume items
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    resumeItems.forEach(item => {
        itemObserver.observe(item);
    });
}

// Animate resume items with staggered delay
function animateResumeItems() {
    const items = document.querySelectorAll('.resume-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, 200 * index);
    });
}

// Function to initialize parallax effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-image, .about-image');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementPosition = element.offsetTop;
            const distance = scrollPosition - elementPosition;
            
            if (distance > -window.innerHeight && distance < window.innerHeight) {
                const translateY = distance * 0.1;
                element.style.transform = `translateY(${translateY}px)`;
            }
        });
    });
}

// Function to initialize smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Create page transition effect
                const transition = document.createElement('div');
                transition.classList.add('page-transition');
                document.body.appendChild(transition);
                
                // Trigger transition
                setTimeout(() => {
                    transition.classList.add('active');
                }, 10);
                
                // After transition completes, scroll to target and remove transition
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    transition.classList.add('exit');
                    
                    setTimeout(() => {
                        document.body.removeChild(transition);
                    }, 500);
                }, 500);
            }
        });
    });
}

// Function to animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    
    skillBars.forEach(bar => {
        const percentage = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = percentage;
            bar.style.transition = 'width 1.5s ease-in-out';
        }, 200);
    });
}

// Function to create a particle background effect
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.home-section');
    
    if (!container) return;
    
    canvas.classList.add('particle-canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color: 'rgba(255, 255, 255, 0.5)',
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5
        });
    }
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Boundary check
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX = -particle.speedX;
            }
            
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY = -particle.speedY;
            }
        });
    }
    
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    });
}

// Call additional animation functions when page is loaded
window.addEventListener('load', function() {
    // Animate skill bars when skills section is in view
    const skillsSection = document.querySelector('.skills-section');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    }
    
    // Create particle background for home section
    createParticleBackground();
});