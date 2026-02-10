// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las secciones
document.querySelectorAll('section').forEach(section => {
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// Mensaje en consola (toque de ciberseguridad)
console.log('%c🔒 Bienvenido a mi CV', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cSi estás viendo esto, ¡probablemente te gusta la tecnología tanto como a mí!', 'color: #2c3e50; font-size: 14px;');
