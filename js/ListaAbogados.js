document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:8080/Abogados') // URL donde está tu endpoint GET
      .then(response => response.json())
      .then(data => {
        const tabla = document.querySelector('#tabla-abogados tbody');
  
        // Vaciar la tabla antes de agregar datos
        tabla.innerHTML = '';
  
        // Recorrer los datos y agregar filas a la tabla
        data.forEach(abogado => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${abogado.nombre}</td>
            <td>${abogado.correo}</td>
            <td>${abogado.telefono}</td>
            <td>${abogado.rama_id}</td>
            <td>${abogado.rol}</td>
            <td>
                <button class="boton-accion boton-editar">Editar</button>
                <button class="boton-accion boton-eliminar">Eliminar</button>
               
            </td>
          `;
          tabla.appendChild(fila);
        });
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  });
  