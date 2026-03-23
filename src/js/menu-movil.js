// Usamos una función autoejecutable para asegurar que el DOM esté listo
(function() {
    const initMenu = () => {
        const menuBtn = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        if (!menuBtn || !navList) {
            // Si sale este error, es que el JS se cargó antes que el HTML
            console.error("No se encontraron los elementos. Revisa la posición del script.");
            return;
        }

        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            // Cambio de icono
            const icon = menuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Cerrar al clickear links
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    };

    // Ejecutar al cargar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenu);
    } else {
        initMenu();
    }
})();
