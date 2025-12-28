// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navigation Toggle Logic
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
let navOpen = false;

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    
    if (isOpen) {
        // Menu opening: Change to 'X' icon
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        navOpen = true;
    } else {
        // Menu closing: Change back to 'Hamburger' icon
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        navOpen = false;
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            navOpen = false;
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        navOpen = false;
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

