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


document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".nav-links .dropdown");
  
    dropdown.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      dropdown.classList.toggle("active"); // Toggle the active class
    });
  
    // Optional: Close the dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });
  
  document.querySelectorAll('.faq-item .question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.toggle');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});
// JavaScript to handle button hover effects or animations if needed
document.querySelector('.button').addEventListener('mouseover', function () {
  // You can add any custom animations or actions here for the button when hovered
  console.log('Button hovered');
});

document.querySelector('.button').addEventListener('mouseleave', function () {
  // Reset any hover effects or actions if needed
  console.log('Button mouse leave');
});


document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".nav-links .dropdown");
  const dropdownLink = document.querySelector(".nav-links .dropdown .dropdown-link");
  const dropdownMenu = document.querySelector(".nav-links .dropdown .dropdown-menu");
  const dropdownItems = dropdownMenu.querySelectorAll("a");

  // Toggle dropdown visibility when clicking on "Procedure"
  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent navigation for the dropdown link
    dropdown.classList.toggle("active");
  });

  // Allow links inside the dropdown to work
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      dropdown.classList.remove("active"); // Optional: Close dropdown on link click
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

// dashboard javascript 

// Line Chart Initialization
const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2, 3, 7],
                borderColor: '#00d084',
                backgroundColor: 'rgba(0, 208, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Dataset 2',
                data: [7, 10, 5, 2, 20, 10, 5],
                borderColor: '#243342',
                backgroundColor: 'rgba(36, 51, 66, 0.2)',
                fill: true,
            },
        ],
    },
    options: {
        responsive: true,
    },
});
