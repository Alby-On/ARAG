document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Verificación de seguridad en consola
    if (!menuBtn || !navList) {
        console.warn("⚠️ Error en ARAG SPA: No se encontró el botón (#mobile-menu) o la lista (#nav-list). Revisa tu HTML.");
        return;
    }

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Alternamos la clase active en la lista
        navList.classList.toggle('active');

        // Cambiamos el icono de barras a X
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
        
        console.log("Menú toggle ejecutado"); 
    });

    // Cerrar el menú al hacer clic en cualquier enlace (importante en Single Page)
    const links = navList.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });
});
