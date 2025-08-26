// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Add animation to highlight section
        document.querySelector('.highlight').style.transform = 'scale(1.1)';
        setTimeout(() => {
            document.querySelector('.highlight').style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);
    });
});