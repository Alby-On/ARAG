const observerStats = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        document.querySelectorAll('.stat-num').forEach(num => {

            const target = +num.innerText.replace(/\D/g,'');
            let count = 0;

            const update = () => {
                if (count < target) {

                    count += Math.ceil(target / 50);

                    num.innerText = num.innerText.includes('%')
                        ? count + '%'
                        : '+' + count;

                    setTimeout(update, 30);
                }
            };

            update();
        });
    }

}, { threshold: 0.5 });

observerStats.observe(document.querySelector('.stats-bar'));
