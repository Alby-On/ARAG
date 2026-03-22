async function includeComponent(containerId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
        }
    } catch (error) {
        console.error("Error cargando el componente:", error);
    }
}

// Así los llamas:
includeComponent('navbar-container', '/src/components/navbar.html');
includeComponent('header-container', '/src/components/header.html');
includeComponent('carrusel-marcas-container', '/src/components/carrusel-marcas.html');

includeComponent('nosotros-container', '/src/components/nosotros.html');
includeComponent('clientes-container', '/src/components/clientes.html');
includeComponent('servicios-container', '/src/components/servicios.html');
includeComponent('porque-elegirnos-container', '/src/components/porque-elegirnos.html');
includeComponent('contacto-container', '/src/components/contacto.html');

includeComponent('footer-container', '/src/components/footer.html');
includeComponent('wsp-container', '/src/components/wsp.html');
