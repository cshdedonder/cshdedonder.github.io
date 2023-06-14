function initMaps() {
    const directionsService = new google.maps.DirectionsService();

    const directionsRendererLiefkenshoek = new google.maps.DirectionsRenderer();
    const directionsRendererKennedy = new google.maps.DirectionsRenderer();

    const trafficLayerLiefkenshoek = new google.maps.TrafficLayer();
    const trafficLayerKennedy = new google.maps.TrafficLayer();

    const mapOptions = {
        center:new google.maps.LatLng(51.254109, 4.298360),
        zoom:11,
    };
    
    const mapLiefkenshoek = new google.maps.Map(document.getElementById("commuteLiefkenshoekMap"), mapOptions);
    const mapKennedy = new google.maps.Map(document.getElementById("commuteKennedyMap"), mapOptions);

    trafficLayerLiefkenshoek.setMap(mapLiefkenshoek);
    directionsRendererLiefkenshoek.setMap(mapLiefkenshoek);

    trafficLayerKennedy.setMap(mapKennedy);
    directionsRendererKennedy.setMap(mapKennedy);

    const start = new google.maps.LatLng(51.292612, 4.165986);
    const end = "79RP+8X Antwerpen"

    const requestLiefkenshoek = {
        origin: start,
        destination: end,
        waypoints: [
            {
                location: new google.maps.LatLng(51.29710925199776, 4.297833572971914),
                stopover: false
            }
        ],
        provideRouteAlternatives: false,
        travelMode: "DRIVING",
        drivingOptions: {
            departureTime: new Date(Date.now()),
            trafficModel: 'bestguess'
        },
        unitSystem: google.maps.UnitSystem.METRIC
    };

    const requestKennedy = {
        origin: start,
        destination: end,
        travelMode: "DRIVING"
    };

    directionsService.route(requestLiefkenshoek, function(result, status) {
        if(status == 'OK') {
            document.getElementById("output").textContent = result.routes[0].legs[0].duration.text;
            directionsRendererLiefkenshoek.setDirections(result);
        }
    });
}