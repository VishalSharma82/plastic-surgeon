function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
  
    // Simulate page load delay (for demonstration)
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.visibility = "hidden";
    }, 1500); // Adjust this delay as needed
  });
  

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}
