
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "Aditya" && password === "1234") {
        alert("Login successful!");
        errorMessage.style.display = "none";
        
       
        window.location.href = "index1.html";  // Redirects to dashboard.html

        return false;  // Prevent form submission (if form is not needed)
    } else {
        errorMessage.textContent = "Invalid username or password";
        errorMessage.style.display = "block";
        return false;
    }
}




for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(star);
  }
  