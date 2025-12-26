const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Menutup menu saat salah satu link diklik (agar tidak mengganggu di HP)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});