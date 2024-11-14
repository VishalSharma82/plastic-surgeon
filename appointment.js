// // Show and hide sections based on the current step
// function showSection(hideSelector, showSelector) {
//     document.querySelector(hideSelector).style.display = 'none';
//     document.querySelector(showSelector).style.display = 'block';
// }

// // Validate form and proceed to the payment section
// function proceedToPayment() {
//     const form = document.getElementById('appointmentForm');
//     if (form.checkValidity()) {
//         showSection('.form-section', '.payment-section');
//     } else {
//         alert('Please fill out all required fields.');
//     }
// }

// // Validate payment form and proceed to the confirmation section
// function confirmAppointment() {
//     const paymentForm = document.getElementById('paymentForm');
//     if (paymentForm.checkValidity()) {
//         showSection('.payment-section', '.confirmation-section');
//         alert("Form data sent to your email.");  // Simulated email confirmation
//     } else {
//         alert('Please fill out all required fields.');
//     }
// }

// // Go back to the appointment form section
// function goBackToForm() {
//     showSection('.payment-section', '.form-section');
// }

// // Redirect to home page
// function goHome() {
//     window.location.href = "index.html";
// }

// // Function to toggle sections based on success or failure
// function processPayment() {
//     const isPaymentSuccessful = true;  // Simulated payment success
//     if (isPaymentSuccessful) {
//         showSection('#payment-section', '#confirmation-section');
//     } else {
//         showSection('#payment-section', '#not-confirmed-section');
//     }
// }

// // Reset to the booking section
// function backToHome() {
//     showSection('#confirmation-section', '#booking-section');
//     document.getElementById('not-confirmed-section').style.display = 'none';
// }

// // Functions to control the flow
// document.getElementById('appointmentForm').addEventListener('submit', (event) => {
//     event.preventDefault();  // Prevent actual form submission
//     proceedToPayment();
// });

// document.getElementById('paymentForm').addEventListener('submit', (event) => {
//     event.preventDefault();  // Prevent actual form submission
//     confirmAppointment();
// });




// // Set min date to today's date
// const today = new Date().toISOString().split("T")[0];
// document.getElementById("appointment-date").setAttribute("min", today);

// // Function to allow only one checkbox to be selected
// function checkOnlyOne(checkbox) {
//     const checkboxes = document.querySelectorAll('input[name="gender"]');
//     checkboxes.forEach((cb) => {
//         if (cb !== checkbox) cb.checked = false;
//     });
// }

// // Form submission event
// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form from submitting immediately
    
//     // Dynamically create the confirmation section
//     const confirmationSection = document.createElement("div");
//     confirmationSection.classList.add("confirmation-section");
//     confirmationSection.innerHTML = `
//         <h2>Appointment Confirmed</h2>
//         <p>Thank you for booking an appointment with us! We have received your details.</p>
//         <p>We will contact you shortly with further information.</p>
//         <button class="back-to-home" onclick="goHome()">Back to Home</button>
//         <button class="pay-now" onclick="goToPayment()">Pay Advance Fee</button>
//     `;
    
//     // Append the confirmation section to a container on the page
//     document.querySelector(".container").appendChild(confirmationSection);
// });

// function goHome() {
//     window.location.href = "./index.html";
// }

// function goToPayment() {
//     window.location.href = "payment.html";
// }
