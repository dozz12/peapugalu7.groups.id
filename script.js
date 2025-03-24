// Fungsi untuk menampilkan alert saat tombol diklik
function showAlert() {
    alert("Jelajahi sejarah Kedatuan Luwu yang kaya dan menarik!");
}

// Menangani pengiriman form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    
    if (name && message) {
        document.getElementById("response").innerText = `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
    } else {
        document.getElementById("response").innerText = "Harap isi semua kolom.";
    }
});
// Fungsi untuk menampilkan alert saat tombol diklik
function showAlert() {
    alert("Jelajahi sejarah Kedatuan Luwu yang kaya dan menarik!");
}

// Menangani pengiriman form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    
    if (name && message) {
        document.getElementById("response").innerText = `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
    } else {
        document.getElementById("response").innerText = "Harap isi semua kolom.";
    }
});
