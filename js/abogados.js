// abogados.js

async function fetchAbogados() {
    try {
        const response = await fetch('http://localhost:8080/Abogados');
        
        // Verifica si la solicitud fue exitosa
        if (response.ok) {
            const data = await response.json(); // Convertir respuesta a JSON
            console.log('Lista de abogados:', data); // Imprimir los abogados en la consola
        } else {
            console.error('Error al obtener abogados:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

// Llama a la función cuando se carga la página
window.onload = fetchAbogados;
