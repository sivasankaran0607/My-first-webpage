// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Dynamic welcome message
  const headerTitle = document.querySelector("header h1");
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning, welcome to DevOps World!";
  } else if (hours < 18) {
    greeting = "Good Afternoon, welcome to DevOps World!";
  } else {
    greeting = "Good Evening, welcome to DevOps World!";
  }

  headerTitle.textContent = greeting;

  // Dark mode toggle
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.style.marginTop = "1rem";
  document.querySelector("header").appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Update footer year automatically
  const footerText = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  footerText.innerHTML = `&copy; ${currentYear} DevOps Webpage | Built for learning`;
});
