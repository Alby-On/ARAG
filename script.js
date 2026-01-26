document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContacto');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const btn = this.querySelector('button');
        
        // Efecto visual de carga
        btn.innerText = "Enviando...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulación de envío de datos
        setTimeout(() => {
            alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje correctamente.`);
            form.reset();
            btn.innerText = "Enviar Mensaje";
            btn.style.opacity = "1";
            btn.disabled = false;
        }, 1500);
    });
});
