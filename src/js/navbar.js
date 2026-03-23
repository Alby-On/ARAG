// --- 2. Nav Activo (Versión Infalible por Posición) ---
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section[id], div[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    // Calculamos qué sección está cruzando la línea de los 150px desde arriba
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // window.scrollY es la posición actual del scroll
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        
        // Si el href del link es exactamente # + el id de la sección visible
        if (current && href === `#${current}`) {
            item.classList.add('active');
        }
    });
});
