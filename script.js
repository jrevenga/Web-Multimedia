document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const indice = document.getElementById('indice');
    const contenido = document.getElementById('contenido');

    toggleButton.addEventListener('click', function () {
        indice.classList.toggle('oculto');
        toggleButton.classList.toggle('cerrado');
        contenido.classList.toggle('oculto');
        toggleButton.classList.toggle('desplazado');
    });

    // Cambio de color al hacer hover sobre el encabezado
    const header = document.querySelector('header');
    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = '#2980b9';
    });

    header.addEventListener('mouseout', function () {
        header.style.backgroundColor = '#3498db';
    });

    // Desplegar sublistas al hacer clic en los títulos
    const h2Elements = document.querySelectorAll('#indice h2');
    h2Elements.forEach(h2 => {
        h2.addEventListener('click', function () {
            const ul = this.nextElementSibling;
            ul.classList.toggle('visible');
        });
    });

    // Desplazamiento suave al hacer clic en los enlaces del índice
    const links = document.querySelectorAll('#indice a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });

        });
    });
});
