const trips = [
    {
        id: 1,
        nama: "Trip ke Bali",
        lokasi: "Bali, Indonesia",
        tanggal: "Tersedia Setiap Minggu",
        hargaReguler: 2500000,
        hargaVIP: 4000000,
        img: "images/bali.png",
        deskripsi: "Nikmati liburan tak terlupakan ke Bali dengan destinasi terkenal seperti Uluwatu, Tanah Lot, dan Nusa Penida."
    },
    {
        id: 2,
        nama: "Explore Labuan Bajo",
        lokasi: "Labuan Bajo, NTT",
        tanggal: "Setiap Akhir Pekan",
        hargaReguler: 3500000,
        hargaVIP: 5000000,
        img: "images/bajo.png",
        deskripsi: "Jelajahi keindahan alam Labuan Bajo, melihat komodo, dan snorkeling di perairan yang jernih."
    },
    {
        id: 3,
        nama: "Trip ke Bromo",
        lokasi: "Gunung Bromo, Jawa Timur",
        tanggal: "Tersedia Setiap Bulan",
        hargaReguler: 1500000,
        hargaVIP: 2500000,
        img: "images/bromo.png",
        deskripsi: "Rasakan sensasi melihat matahari terbit dari Puncak Bromo dengan pemandangan yang spektakuler."
    },
    {
        id: 4,
        nama: "Tour Raja Ampat",
        lokasi: "Papua Barat",
        tanggal: "Jadwal Fleksibel",
        hargaReguler: 5000000,
        hargaVIP: 7000000,
        img: "images/s1.png",
        deskripsi: "Snorkeling dan diving di perairan terbaik dunia dengan keindahan bawah laut yang luar biasa."
    }
];

if (typeof module !== "undefined") {
    module.exports = trips;
}