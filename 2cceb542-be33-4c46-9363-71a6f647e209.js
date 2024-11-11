// script.js

// Función para confirmar envío de formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
});

// Función para cambio de tema (opcional)
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerHTML = "Cambiar Tema";
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Añadir estilo para el tema oscuro
const styles = document.createElement('style');
styles.innerHTML = `
    .dark-theme {
        background-color: #333;
        color: white;
    }
    .dark-theme header {
        background-color: #222;
    }
    .dark-theme footer {
        background-color: #222;
    }
    .dark-theme nav ul li a {
        color: #ffcc00;
    }
`;
document.head.appendChild(styles);
