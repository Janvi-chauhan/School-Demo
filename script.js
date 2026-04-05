// Smooth scrolling for navbar links
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll function for buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Form submission handling
document.getElementById("inquiryForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Form submitted successfully!");

    // reset form after submit
    this.reset();
  });