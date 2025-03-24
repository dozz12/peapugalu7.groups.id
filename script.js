// Tampilkan login page
function showLogin() {
    document.getElementById("login-page").style.display = "block";
}

// Handle Login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login berhasil!");
    document.getElementById("login-page").style.display = "none";
});
