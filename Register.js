document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const Number = document.getElementById('phone Number').value;
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const registerErrorMsg = document.getElementById('register-error-msg');

  // Simple validation
  if (username === "" || email === "" || password === "" || confirmPassword === "") {
      registerErrorMsg.style.display = "block"; // Show error message
      return;
  }

  if (password !== confirmPassword) {
      registerErrorMsg.textContent = "Passwords do not match.";
      registerErrorMsg.style.display = "block"; // Show error message
      return;
  }

  // Simulate successful registration (replace with actual registration logic)
  alert("Registration successful!");
  // Redirect to the login page or another page
  window.location.href = "Login.html"; 
});