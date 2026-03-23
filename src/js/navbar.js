// --- 2. Nav Activo (Detección por Intersección) ---
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Detecta la sección cuando está en la parte superior
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Quitar clase active de todos
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                // Si el href coincide con el id de la sección visible
                if (link.getAttribute('href') === `#${id}`) {
                    link.setAttribute('active-found', 'true'); // Marca temporal
                    link.classList.add('active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Seleccionamos todas las secciones que tengan un ID
document.querySelectorAll('section[id], div[id]').forEach(section => {
    observer.observe(section);
});
