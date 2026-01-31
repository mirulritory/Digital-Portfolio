document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.hero-info-box h1');
    if (!heading) return; // Exit if heading doesn't exist

    const text = "amirul faris bin roslan";
    let i = 0;
    const speed = 100; // typing speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Clear the heading first
    heading.textContent = '';

    // Start the animation after a small delay
    setTimeout(typeWriter, 800);
});