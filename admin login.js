const correctPassword = "admin123"; // Change this password

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        window.location.href = "admin page.html"; // Redirect to admin page
    } else {
        errorMessage.textContent = "Incorrect password. Try again.";
    }
}