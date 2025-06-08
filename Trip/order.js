document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get("id");

    const trip = trips.find(t => t.id == tripId);

    if (trip) {
        document.getElementById("trip-name").textContent = trip.nama;
        document.getElementById("trip-location").textContent = trip.lokasi;
        document.getElementById("trip-date").textContent = trip.tanggal;

        const ticketTypeSelect = document.getElementById("ticket-type");
        const quantityInput = document.getElementById("quantity");
        const totalPriceElement = document.getElementById("total-price");

        // Isi dropdown harga tiket
        ticketTypeSelect.innerHTML = `
            <option value="reguler" data-price="${trip.hargaReguler}">Reguler - ${trip.hargaReguler.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</option>
            <option value="vip" data-price="${trip.hargaVIP}">VIP - ${trip.hargaVIP.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</option>
        `;

        // Fungsi update harga
        function updatePrice() {
            const selectedOption = ticketTypeSelect.options[ticketTypeSelect.selectedIndex];
            let ticketPrice = parseInt(selectedOption.getAttribute("data-price")) || 0;
            let quantity = parseInt(quantityInput.value) || 1;
            let totalPrice = ticketPrice * quantity;
    
            totalPriceElement.textContent = "Rp " + totalPrice.toLocaleString("id-ID");
        }

        // Event listener perubahan harga
        ticketTypeSelect.addEventListener("change", updatePrice);
        quantityInput.addEventListener("input", updatePrice);

        // Inisialisasi harga pertama kali
        updatePrice();

        // Tombol lanjut ke pembayaran
        document.getElementById("goToPayment").addEventListener("click", function () {
            const ticketType = ticketTypeSelect.value;
            const ticketQuantity = quantityInput.value;
            const totalPrice = totalPriceElement.textContent.replace("Rp ", "").replace(/\./g, "");

            window.location.href = `payment.html?trip=${encodeURIComponent(trip.nama)}&type=${ticketType}&quantity=${ticketQuantity}&price=${totalPrice}`;
        });
    } else {
        document.querySelector(".order-container").innerHTML = "<p>Trip tidak ditemukan.</p>";
    }
});