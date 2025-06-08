document.addEventListener("DOMContentLoaded", function () {
    const tripListContainer = document.getElementById("trip-list");

    if (typeof trips !== "undefined" && Array.isArray(trips)) {
        trips.forEach(trip => {
            const tripCard = document.createElement("div");
            tripCard.classList.add("trip-card");

            tripCard.innerHTML = `
                <img src="${trip.img}" alt="${trip.nama}">
                <div class="trip-content">
                    <h3>${trip.nama}</h3>
                    <p>${trip.lokasi}</p>
                </div>
                <button class="trip-btn" onclick="goToDetail(${trip.id})">Go Trip</button>
            `;

            tripListContainer.appendChild(tripCard);
        });
    } else {
        tripListContainer.innerHTML = "<p>Data trip tidak tersedia.</p>";
    }
});

// Fungsi untuk navigasi ke halaman detail
function goToDetail(tripId) {
    window.location.href = `trip-detail.html?id=${tripId}`;
}