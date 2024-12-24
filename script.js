window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.onload = function() {
    // Function to animate the counter
    function animateCounter(id, start, end, duration) {
      let current = start;
      const increment = (end - start) / (duration / 10); // Increment step
      const element = document.getElementById(id);
      
      const interval = setInterval(function() {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        element.textContent = Math.round(current);
      }, 10);
    }
  
    // Call the function for each counter
    animateCounter("clients", 0, 90, 2000);   // Example: From 0 to 500 (over 2 seconds)
    animateCounter("products", 0, 150, 2500);  // Example: From 0 to 1500 (over 2.5 seconds)
    animateCounter("revenue", 0, 1700, 3000); // Example: From 0 to 100000 (over 3 seconds)
  };
  window.onscroll = function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Check if the page has been scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
document.querySelector('.brands-carousel').addEventListener('mouseover', () => {
    document.querySelector('.brands-track').style.animationPlayState = 'paused';
});

document.querySelector('.brands-carousel').addEventListener('mouseout', () => {
    document.querySelector('.brands-track').style.animationPlayState = 'running';
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Grab form data
    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (firstName === '' || email === '' || message === '') {
        alert('Please fill in all required fields!');
    } else {
        // If validation passes, submit the form (uncomment in real use)
        // this.submit();
        alert('Your message has been sent successfully!');
    }
});
