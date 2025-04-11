// login.js

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Redirect to portal.html without validating the email and password
  window.location.href = "portal.html"; // Redirect to portal.html
});
