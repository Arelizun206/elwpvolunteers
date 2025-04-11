// login.js

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the email and password values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if both fields are filled in
  if (email && password) {
    // If both fields are filled, submit the form
    window.location.href = "portal.html"; // Redirect to portal.html
  } else {
    // Show an alert if any of the fields are empty
    alert("Please fill in both email and password.");
  }
});
