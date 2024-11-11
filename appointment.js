// Show and hide sections based on the current step
function showSection(hideSelector, showSelector) {
    document.querySelector(hideSelector).style.display = 'none';
    document.querySelector(showSelector).style.display = 'block';
}

// Validate form and proceed to the payment section
function proceedToPayment() {
    const form = document.getElementById('appointmentForm');
    if (form.checkValidity()) {
        showSection('.form-section', '.payment-section');
    } else {
        alert('Please fill out all required fields.');
    }
}

// Validate payment form and proceed to the confirmation section
function confirmAppointment() {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm.checkValidity()) {
        showSection('.payment-section', '.confirmation-section');
        alert("Form data sent to your email.");  // Simulated email confirmation
    } else {
        alert('Please fill out all required fields.');
    }
}

// Go back to the appointment form section
function goBackToForm() {
    showSection('.payment-section', '.form-section');
}

// Redirect to home page
function goHome() {
    window.location.href = "index.html";
}

// Function to toggle sections based on success or failure
function processPayment() {
    const isPaymentSuccessful = true;  // Simulated payment success
    document.getElementById('payment-section').classList.remove('active');

    if (isPaymentSuccessful) {
        showSection('#payment-section', '#confirmation-section');
    } else {
        showSection('#payment-section', '#not-confirmed-section');
    }
}

// Function to show specific sections
function showSection(hideSelector, showSelector) {
    document.querySelector(hideSelector).classList.remove('active');
    document.querySelector(showSelector).classList.add('active');
}

// Reset to the booking section
function backToHome() {
    showSection('#confirmation-section', '#booking-section');
    document.getElementById('not-confirmed-section').classList.remove('active');
}

// Show the payment section from booking
function showPayment() {
    showSection('#booking-section', '#payment-section');
}

// Show the booking section from payment
function showBooking() {
    showSection('#payment-section', '#booking-section');
}

// Functions to control the flow
document.getElementById('appointmentForm').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent actual form submission
    proceedToPayment();
});

document.getElementById('paymentForm').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent actual form submission
    confirmAppointment();
});

// Toggle FAQ answers visibility
document.querySelectorAll('.faqbox img').forEach((image) => {
    image.addEventListener('click', () => {
        const answer = image.closest('.faqbox').nextElementSibling; // Get the next sibling (which is the .faq-answer)
        
        // Toggle the 'show' class to show or hide the answer
        answer.classList.toggle('show');
    });
});

// Function to proceed to payment section
function proceedToPayment() {
    const form = document.getElementById('appointmentForm');
    if (form.checkValidity()) {
        showSection('.form-section', '.payment-section');
    } else {
        alert('Please fill out all required fields.');
    }
}

// Function to confirm appointment after payment
function confirmAppointment() {
    const form = document.getElementById('paymentForm');
    if (form.checkValidity()) {
        showSection('.payment-section', '.confirmation-section');
        alert("Form data sent to your email.");  // Simulated email confirmation
    } else {
        alert('Please fill out all required fields.');
    }
}
