document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('#welcome h1');
    const text = "Hi, I'm Amirul Faris Roslan.";
    let i = 0;
    const speed = 100; // typing speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            heading.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Clear the heading first
    heading.innerHTML = '';
    
    // Start the animation
    typeWriter();
});