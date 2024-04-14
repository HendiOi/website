// Contoh JavaScript untuk menambahkan interaktivitas (misalnya, animasi atau efek lainnya)

// Fungsi untuk mengubah warna latar belakang header saat dihover
document.querySelector('header').addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#555';
});

document.querySelector('header').addEventListener('mouseleave', function () {
    this.style.backgroundColor = '#333';
});

// Fungsi untuk menampilkan pesan sederhana saat halaman dimuat
window.addEventListener('load', function () {
    alert('Selamat datang di Salon Pangkas Rambut Keren!');
});
// Menambahkan efek scroll smooth pada semua tautan yang merujuk ke elemen dengan id
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
