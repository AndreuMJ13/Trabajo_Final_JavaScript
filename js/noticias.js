document.addEventListener('DOMContentLoaded', function() {
    fetch('noticias.json') // Ruta al archivo JSON
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(noticias => {
            const contenedorNoticias = document.getElementById('contenedor-noticias');
            noticias.forEach(noticia => {
                const noticiaElement = document.createElement('div');
                noticiaElement.classList.add('noticia');

                // Crear el elemento de la imagen
                const imagenElement = document.createElement('img');
                imagenElement.src = noticia.imagen;
                imagenElement.alt = noticia.titulo;

                // Crear el elemento del título
                const tituloElement = document.createElement('h3');
                tituloElement.textContent = noticia.titulo;
                
                // Crear el elemento del contenido
                const contenidoElement = document.createElement('p');
                contenidoElement.textContent = noticia.contenido;
                
                // Añadir imagen, título y contenido al contenedor de la noticia
                noticiaElement.appendChild(imagenElement);
                noticiaElement.appendChild(tituloElement);
                noticiaElement.appendChild(contenidoElement);
                
                // Añadir la noticia completa al contenedor de noticias
                contenedorNoticias.appendChild(noticiaElement);
            });
        })
        .catch(error => console.error('Error cargando noticias:', error));
});
