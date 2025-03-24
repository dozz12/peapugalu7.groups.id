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

// Fungsi untuk menampilkan halaman Sign Up
function showSignUp() {
    document.getElementById("signup-page").style.display = "block";
}

// Event listener untuk menangani form Sign Up
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah halaman reload

    // Ambil nilai input dari form
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    // Validasi input
    if (name.length < 3) {
        alert("Nama harus lebih dari 3 karakter!");
        return;
    }
    if (password.length < 6) {
        alert("Password harus lebih dari 6 karakter!");
        return;
    }

    // Simulasi pendaftaran sukses
    alert(`Selamat ${name}, Anda berhasil mendaftar!`);

    // Sembunyikan form setelah sukses daftar
    document.getElementById("signup
