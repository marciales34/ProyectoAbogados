document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

  // Capturar los valores de los inputs y el select
  const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
  const correo = document.querySelector('input[placeholder="Correo"]').value.trim();
  const password = document.querySelector('input[placeholder="Contraseña"]').value.trim();
  const telefono = document.querySelector('input[placeholder="Telefono"]').value.trim();
  const ramaId = document.querySelector('select[name="rama_id"]').value;

  // Validaciones básicas
  if (!nombre || !correo || !password || !telefono || !ramaId) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Crear el objeto que será enviado al servidor
  const abogadoData = {
    nombre: nombre,
    correo: correo,
    password: password,
    telefono: telefono,
    rama_id: ramaId,
    rol: 'abogado'
  };

  // Enviar los datos usando fetch con método POST
  fetch('http://localhost:8080/Enviar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(abogadoData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.text(); // Leer la respuesta como texto
    })
    .then(text => {
      console.log('Respuesta del servidor:', text); // Mostrar la respuesta en la consola
      alert("Registro Exitoso"); // Mostrar el texto directamente
      window.location.href = 'PaginaPrincipalLogueada.html';
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error al registrar el abogado: " + error.message);
    });
});


