// Header: fundo sólido ao rolar a página
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
    });
});

// Animação dos cards de serviço ao entrar na tela
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.08}s`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Formulário de contato (envio simulado)
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
    form.reset();
});
