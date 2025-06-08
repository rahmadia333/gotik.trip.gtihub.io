document.addEventListener("DOMContentLoaded", function () {
    const tripList = document.getElementById("trip-list");

    if (!tripList) {
        console.error("Elemen dengan id 'trip-list' tidak ditemukan di halaman.");
        return;
    }

    if (typeof trips === "undefined") {
        console.error("Data trip tidak ditemukan. Pastikan trips.js sudah dimuat sebelum script.js.");
        return;
    }

    tripList.innerHTML = "";

    trips.forEach(trip => {
        const hargaRegulerFormatted = trip.hargaReguler.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

        const tripItem = document.createElement("div");
        tripItem.classList.add("trip-card");
        tripItem.innerHTML = `
            <a href="trip-detail.html?id=${trip.id}" class="trip-link">
                <img src="${trip.img}" alt="${trip.nama}" class="trip-image">
                <h3>${trip.nama}</h3>
                <p>${trip.lokasi} - ${trip.tanggal}</p>
                <p>Mulai dari: <strong>${hargaRegulerFormatted}</strong></p>
            </a>
            <button class="trip-btn" data-id="${trip.id}">Pesan Tiket</button>
        `;
        tripList.appendChild(tripItem);
    });

    document.querySelectorAll(".trip-btn").forEach(button => {
        button.addEventListener("click", function () {
            location.href = `trip-detail.html?id=${tripId}`;
        });
    });
});