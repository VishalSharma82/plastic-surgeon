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

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
