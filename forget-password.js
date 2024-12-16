function valid(){ 
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const newpassword = document.getElementById('newpassword').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const messageElement = document.getElementById('message');
    
if(email === '' || mobile === '' || newpassword === '' || confirmpassword === ''){
    alert('please fill in all field.');
    return false;
}
if(newpassword !== confirmpassword){
    alert('password do not match.');
    return false;
}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
        return true;
    }
    messageElement.textContent = 'A reset link has been sent to ' + email + '.';
    messageElement.style.color = 'green';
}
