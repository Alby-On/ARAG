const telInput = document.querySelector('input[name="telefono"]');

telInput.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,9})/);
    e.target.value = x[0];
});
