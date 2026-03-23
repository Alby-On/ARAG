const iniciarMenuArag = () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        console.log("✅ Menú de ARAG SPA detectado y listo.");

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navList.classList.toggle('active');

            // Cambio de icono con FontAwesome
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Cerrar al hacer clic en un link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) icon.classList.replace('fa-times', 'fa-bars');
            });
        });
    } else {
        // Si aún falla, reintentamos en 500ms (solo una vez)
        console.warn("Reintentando encontrar elementos...");
        setTimeout(iniciarMenuArag, 500);
    }
};

// Disparar cuando el DOM esté listo
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    iniciarMenuArag();
} else {
    document.addEventListener('DOMContentLoaded', iniciarMenuArag);
}
