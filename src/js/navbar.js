// --- 2. Nav Activo (Ajustado para Topbar + Navbar) ---
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section[id], div[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    // 1. Calculamos la posición considerando el alto de la Topbar + Navbar
    // Usamos un margen de 250px para que el cambio sea natural al hacer scroll
    const scrollPosition = window.scrollY + 250;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Si el scroll actual ha pasado el inicio de la sección
        if (scrollPosition >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // 2. Aplicar la clase active al link correspondiente
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');

        if (current && href === `#${current}`) {
            item.classList.add('active');
        }
    });

    // 3. Caso especial: Si estamos en el tope de la página (Hero), 
    // forzamos que no haya nada activo o se marque el primero si no hay ID.
    if (window.scrollY < 100) {
        navItems.forEach(item => item.classList.remove('active'));
        // Si tienes un link de "Inicio", podrías activarlo aquí manualmente:
        // document.querySelector('a[href="#inicio"]')?.classList.add('active');
    }
});
