function proceedToPayment() {
    document.querySelector(".form-section").style.display = "none";
    document.querySelector(".payment-section").style.display = "block";
}

function confirmAppointment() {
    document.querySelector(".payment-section").style.display = "none";
    document.querySelector(".confirmation-section").style.display = "block";
    // Simulate sending email (backend functionality needed for real use)
    alert("Form data sent to your email.");
}

function goBackToForm() {
    document.querySelector(".payment-section").style.display = "none";
    document.querySelector(".form-section").style.display = "block";
}

function goHome() {
    window.location.href = "index.html";
}

        // Function to show the payment section
        function showPayment() {
            document.getElementById('booking-section').classList.remove('active');
            document.getElementById('payment-section').classList.add('active');
        }

        // Function to process payment and show confirmation or error
        function processPayment() {
            const isPaymentSuccessful = true; // Simulate payment success or failure
            document.getElementById('payment-section').classList.remove('active');

            if (isPaymentSuccessful) {
                document.getElementById('confirmation-section').classList.add('active');
            } else {
                document.getElementById('not-confirmed-section').classList.add('active');
            }
        }

        // Function to show the booking section
        function showBooking() {
            document.getElementById('payment-section').classList.remove('active');
            document.getElementById('booking-section').classList.add('active');
        }

        // Function to go back to home or reset
        function backToHome() {
            document.getElementById('confirmation-section').classList.remove('active');
            document.getElementById('not-confirmed-section').classList.remove('active');
            document.getElementById('booking-section').classList.add('active');
        }



        document.querySelectorAll('.faqbox img').forEach((image) => {
            image.addEventListener('click', () => {
                const answer = image.closest('.faqbox').nextElementSibling; // Get the next sibling (which is the .faq-answer)
                
                // Toggle the 'show' class to show or hide the answer
                answer.classList.toggle('show');
            });
        });
          
          