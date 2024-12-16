document.getElementById('admin-login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = this.username.value;
    const password = this.password.value;

    // Dummy credentials for demonstration
    const validAdminUsername = "chandan";
    const validAdminPassword = "1234567890";

    if (username === validAdminUsername && password === validAdminPassword) {
        alert("Logged in successfully!");
        // Redirect to the admin dashboard or another page
        window.location.href = 'admin_dashboard.html'; // Change to your admin dashboard page
    } else {
        const errorMsg = document.getElementById('login-error-msg');
        errorMsg.style.display = 'block'; // Show error message
    }
});