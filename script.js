// Smooth scrolling para links de navegação
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

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#FFFFFF';
        header.style.backdropFilter = 'none';
    }
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Elementos para animar
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .course-card, .gallery-item, .illustration-item, .about-card'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Mobile menu toggle (para futuras implementações)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Efeito de hover nos botões CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contador de urgência (opcional)
function updateUrgencyText() {
    const urgencyElements = document.querySelectorAll('.urgency-text');
    const messages = [
        'Vagas limitadas! Garanta já a sua!',
        'Últimas vagas disponíveis!',
        'Não perca essa oportunidade!',
        'Matrículas abertas por tempo limitado!'
    ];
    
    urgencyElements.forEach(element => {
        const textSpan = element.querySelector('span') || element.childNodes[2];
        if (textSpan) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            textSpan.textContent = randomMessage;
        }
    });
}

// Atualizar texto de urgência a cada 10 segundos
setInterval(updateUrgencyText, 10000);

