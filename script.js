// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }
});

// Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor hover effect
    const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-item, .timeline-item, .service-preview-card, .why-choose-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.className = newTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
    });
}

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

// Navbar Scroll
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                
                const increment = count / speed;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < count) {
                        target.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 1);
                    } else {
                        target.textContent = count;
                    }
                };
                
                updateCounter();
                observer.unobserve(target);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Skill Progress Animation
const skillProgress = document.querySelectorAll('.skill-progress');

if (skillProgress.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                skillObserver.unobserve(bar);
            }
        });
    });
    
    skillProgress.forEach(bar => skillObserver.observe(bar));
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Validation & Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="ti ti-loader"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate sending (replace with actual email service)
        setTimeout(() => {
            // Show success message
            submitBtn.innerHTML = '<i class="ti ti-check"></i> Message Sent!';
            submitBtn.style.background = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
            
            // Show alert
            alert('Thank you for your message! I will get back to you soon.');
        }, 1500);
    });
}

// Page Transition Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Animate on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-preview-card, .why-choose-card, .timeline-item, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Run animation
animateOnScroll();

// Active Nav Link
const setActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#')) {
            link.classList.add('active');
        }
    });
};

setActiveNavLink();
