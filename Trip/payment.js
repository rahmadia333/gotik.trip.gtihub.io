// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const tripName = urlParams.get("trip") || "Tidak Diketahui";
const ticketType = urlParams.get("type") || "Tidak Diketahui";
const ticketQuantity = urlParams.get("quantity") || "0";
let totalPrice = parseInt(urlParams.get("price")) || 0; // Konversi harga menjadi angka

// Tampilkan detail pesanan
document.getElementById("trip-name").textContent = tripName;
document.getElementById("ticket-type").textContent = ticketType.charAt(0).toUpperCase() + ticketType.slice(1);
document.getElementById("ticket-quantity").textContent = ticketQuantity + " Tiket";
document.getElementById("total-price").textContent = "Rp " + totalPrice.toLocaleString("id-ID");

// Pastikan modal disembunyikan saat halaman dimuat
const modal = document.getElementById("paymentModal");
modal.style.display = "none"; // Ini mencegah modal muncul otomatis saat halaman dimuat

const confirmPaymentBtn = document.getElementById("confirmPayment");
const closeModal = document.querySelector(".close");

// Tampilkan modal hanya saat tombol ditekan
confirmPaymentBtn.addEventListener("click", function () {
    modal.style.display = "flex"; // Gunakan flex agar modal tetap di tengah
});                

// Tutup modal saat tombol "X" diklik
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Tutup modal saat klik di luar area modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});