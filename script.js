document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman Sejarah Kedatuan Luwu telah dimuat.");

    // Form kontak
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Ambil nilai input
            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const pesan = document.getElementById("pesan").value.trim();

            if (nama === "" || email === "" || pesan === "") {
                alert("Harap isi semua bidang formulir sebelum mengirim.");
                return;
            }

            alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim.`);
            form.reset();
        });
    }
});
