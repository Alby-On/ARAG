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
includeComponent('navbar-container', './components/navbar.html');
includeComponent('footer-container', './components/footer.html');
