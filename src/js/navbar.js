// --- 1. Scroll Suave ---
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Si es la calculadora o un link externo, no hacer scroll suave
        if (href.includes('calculadora') || !href.startsWith('#')) {
            return;
        }

        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajustado al alto de tu navbar
                behavior: 'smooth'
            });
        }
    });
});

// --- 2. Nav Activo (Detección de Secciones) ---
window.addEventListener('scroll', () => {
    let current = "";
    
    // Buscamos solo los elementos que tienen un ID (las secciones reales)
    const sections = document.querySelectorAll('section[id], div[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Detectamos si el scroll está dentro del rango de la sección
        // Usamos pageYOffset (o scrollY) con un margen de 150px
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        
        // Verificamos que el ID actual no esté vacío y coincida exactamente con el href
        if (current && href === `#${current}`) {
            item.classList.add('active');
        }
    });
});
