document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
 document.getElementById('showpassword').addEventListener('change',function(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordinput=document.getElementById('password');
    const loginErrorMsg = document.getElementById('login-error-msg');

    // Simple validation (replace with actual authentication logic)
    if (username === "chandan" && password === "1234567890") {
        alert("Login successful!");
        // Redirect to the booking page
        window.location.href = "booking.html"; // Example redirect
    } else {
        loginErrorMsg.style.display = "block"; // Show error message
    }
    if (this.Checked){
        passwordinput.type='text';//show password
    } else{
        passwordinput.type='password';//hide password
    }
});
});