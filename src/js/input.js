/* --- VALIDACIÓN DE TELÉFONO (input.js) --- */
const telInput = document.querySelector('input[name="telefono"]');

// Solo ejecutamos el código si el input realmente existe en la página actual
if (telInput) {
    telInput.addEventListener('input', function (e) {
        // Limpia cualquier caracter que no sea número y limita a 9 dígitos
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 9) {
            value = value.slice(0, 9);
        }
        
        e.target.value = value;
    });
}
