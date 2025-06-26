// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (document.querySelector('nav').classList.contains('active')) {
      document.querySelector('nav').classList.remove('active');
      document.querySelector('.menu-toggle').classList.remove('active');
    }
    
    // Scroll to the section
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const htmlElement = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
} else {
  // Check if user prefers dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) {
    htmlElement.setAttribute('data-theme', 'dark');
  }
}

// Toggle theme when button is clicked
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add animation effect
  document.body.classList.add('theme-transition');
  setTimeout(() => {
    document.body.classList.remove('theme-transition');
  }, 300);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('active') && 
      !navMenu.contains(e.target) && 
      !mobileMenuBtn.contains(e.target)) {
    navMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    contactForm.reset();
  });
}

// Add animation to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    '.project-card, .skill-category, .opensource-card, .cert-card, .education-card, .experience-card, .achievement-card'
  );
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
};

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
  .project-card, .skill-category, .opensource-card, .cert-card, 
  .education-card, .experience-card, .achievement-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  .theme-transition {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Add typing animation to tagline */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--accent-primary) }
  }
  
  .hero .tagline {
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid var(--accent-primary);
    animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
    margin: 0 auto 1.5rem auto;
    max-width: fit-content;
  }
`;
document.head.appendChild(style);

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on page load
window.addEventListener('load', () => {
  animateOnScroll();
  
  // Add year counter for stats
  const countUp = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  };
  
  // Start counting when stats are in view
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
          const target = parseInt(stat.textContent);
          stat.textContent = '0';
          countUp(stat, target, 1500);
        });
        statObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  const statsSection = document.querySelector('.about-stats');
  if (statsSection) {
    statObserver.observe(statsSection);
  }
});
