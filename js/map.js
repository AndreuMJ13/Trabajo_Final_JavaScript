document.addEventListener('DOMContentLoaded', function() {
    // La ubicación de tu negocio
    var businessLocation = [40.730610, -73.935242]; // Cambia esto a tus coordenadas

    // Crear el mapa
    var map = L.map('map').setView(businessLocation, 15);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir marcador
    L.marker(businessLocation).addTo(map)
        .bindPopup('<b>ShopingMedia</b><br>Calle Ejemplo 123, Ciudad, País')
        .openPopup();

    // Añadir funcionalidad para calcular rutas
    L.DomEvent.on(map, 'click', function(e) {
        var start = e.latlng;

        // Limpiar rutas anteriores si existen
        if (window.routeControl) {
            map.removeControl(window.routeControl);
        }

        var routingControl = L.Routing.control({
            waypoints: [
                L.latLng(start.lat, start.lng),
                L.latLng(businessLocation[0], businessLocation[1])
            ],
            routeWhileDragging: true
        }).addTo(map);

        window.routeControl = routingControl;
    });
});
