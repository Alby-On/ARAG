const statsBar = document.querySelector('.stats-bar');

if (statsBar) {
    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Seleccionamos los números dentro de esta barra específicamente
                const statNumbers = entry.target.querySelectorAll('.stat-num');
                
                statNumbers.forEach(num => {
                    // Si ya tiene la clase 'animated', no volvemos a empezar
                    if (num.classList.contains('animated')) return;
                    num.classList.add('animated');

                    const target = +num.innerText.replace(/\D/g, '');
                    const isPercent = num.innerText.includes('%');
                    let count = 0;
                    const duration = 2000; // Duración total en ms
                    const steps = 50;
                    const increment = target / steps;

                    const update = () => {
                        count += increment;
                        if (count < target) {
                            num.innerText = isPercent 
                                ? Math.ceil(count) + '%' 
                                : '+' + Math.ceil(count);
                            setTimeout(update, duration / steps);
                        } else {
                            num.innerText = isPercent ? target + '%' : '+' + target;
                        }
                    };
                    update();
                });

                // Una vez que empieza la animación, dejamos de observar para ahorrar recursos
                observerStats.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observerStats.observe(statsBar);
}
