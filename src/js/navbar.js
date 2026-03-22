// Scroll suave
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        if (this.getAttribute('href').includes('calculadora')) {
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// Nav activo alternativo
window.addEventListener('scroll', () => {

    let current = "";

    const sections = document.querySelectorAll('section, .container');
    const navItems = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {

        item.classList.remove('active');

        if (current && item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});
