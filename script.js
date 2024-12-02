function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Wait for the page to load
window.addEventListener("load", function() {
    // Add a class to the body to indicate loading is complete
    document.body.classList.add("loaded");
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 700); // Adjust delay time as needed
    });
});

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

const mobileMenu = document.getElementById('mobile-menu'); // Hamburger menu element
const navbar = document.querySelector('.navbar'); // Navbar element
const navLinks = document.querySelector('.nav-links'); // Links container
const homeDiv = document.getElementById('home');
const logoimg = document.querySelector('.logo')
const appbtn = document.querySelector('.appointment-btn')
// Event listener to toggle classes on click


mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('expanded'); // Toggles the height of the navbar
    navLinks.classList.toggle('active'); // Toggles visibility of nav links
    if (logoimg.style.display === 'none' || appbtn.style.display=='none') {
        logoimg.style.display = 'flex';
        appbtn.style.display='flex'; // Show logo
      } else {
        logoimg.style.display = 'none'; // Hide logo
        appbtn.style.display= 'none';
      }
    if (homeDiv.style.paddingTop === '276px') {
        homeDiv.style.paddingTop = ''; // Reset padding if already applied
      } else {
        homeDiv.style.paddingTop = '276px';
      }

  
});

