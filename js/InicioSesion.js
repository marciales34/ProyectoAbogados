document.querySelector("#form2").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturar los valores de los inputs
    const correo = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Crear el objeto que será enviado al servidor
    const loginData = {
        correo: correo,
        password: password
    };

    // Enviar los datos usando fetch con método POST
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (response.ok) {
            alert("Inicio de Sesion exitoso");
            // Redirigir a la página principal si el inicio de sesión es exitoso
            window.location.href = 'PaginaPrincipalLogueada.html';
        } else {
            // Mostrar mensaje de error si el inicio de sesión falla
            return response.text().then(text => {
                alert(text);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al iniciar sesión");
    });
});
