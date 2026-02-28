document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add interactivity here
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

// Smooth scroll function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}