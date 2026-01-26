// Efecto de aparición al hacer scroll (Reveal)
function reveal() {
  var reveals = document.querySelectorAll("section, .nosotros-card, .team-card, .card");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Para activar el efecto en la carga inicial
reveal();

// Manejo del Formulario con un toque dinámico
document.getElementById('formContacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn');
    const originalText = btn.innerText;
    
    btn.innerText = "Enviando...";
    btn.style.opacity = "0.7";
    
    // Simulación de envío
    setTimeout(() => {
        btn.innerText = "¡Mensaje Enviado!";
        btn.style.background = "#28a745";
        this.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "var(--grad)";
            btn.style.opacity = "1";
        }, 3000);
    }, 1500);
});;
