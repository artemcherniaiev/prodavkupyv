// ProdavKupyv - Скрипти інтерфейсу та взаємодії
document.addEventListener('DOMContentLoaded', () => {
    console.log('Маркетплейс ProdavKupyv успішно завантажено');

    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});