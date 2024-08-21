// Seleccionamos todas las imágenes, en plural, porque esperamos una lista de nodos
const imagenes = document.querySelectorAll('.img-productos');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

contenedorLight.addEventListener('click', (e) => {
    // Si el usuario hace clic fuera de la imagen, se cierra la lightbox
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        menu1.style.opacity = '1';
    }
});

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    menu1.style.opacity = '0';
}
