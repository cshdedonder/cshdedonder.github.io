function initMaps() {
    const directionsService = new google.maps.DirectionsService();

    const directionsRendererLiefkenshoekTW = new google.maps.DirectionsRenderer();
    const directionsRendererKennedyTW = new google.maps.DirectionsRenderer();
    const directionsRendererLiefkenshoekWT = new google.maps.DirectionsRenderer();
    const directionsRendererKennedyWT = new google.maps.DirectionsRenderer();

    const mapOptions = {
        center: new google.maps.LatLng(51.254109, 4.298360),
        zoom: 11,
        disableDefaultUI: true,
    };
    
    const mapLiefkenshoekTW = new google.maps.Map(document.getElementById("commuteLiefkenshoekMapTW"), mapOptions);
    const mapLiefkenshoekWT = new google.maps.Map(document.getElementById("commuteLiefkenshoekMapWT"), mapOptions);
    const mapKennedyTW = new google.maps.Map(document.getElementById("commuteKennedyMapTW"), mapOptions);
    const mapKennedyWT = new google.maps.Map(document.getElementById("commuteKennedyMapWT"), mapOptions);

    new google.maps.TrafficLayer().setMap(mapLiefkenshoekTW);
    new google.maps.TrafficLayer().setMap(mapLiefkenshoekWT);
    new google.maps.TrafficLayer().setMap(mapKennedyTW);
    new google.maps.TrafficLayer().setMap(mapKennedyWT);

    directionsRendererLiefkenshoekTW.setMap(mapLiefkenshoekTW);
    directionsRendererLiefkenshoekWT.setMap(mapLiefkenshoekWT);
    directionsRendererKennedyTW.setMap(mapKennedyTW);
    directionsRendererKennedyWT.setMap(mapKennedyWT);

    const home = new google.maps.LatLng(51.292612, 4.165986);
    const work = "79RP+8X Antwerpen"

    const requestLiefkenshoekHomeWork = {
        origin: home,
        destination: work,
        waypoints: [
            {
                location: new google.maps.LatLng(51.29576792388987, 4.297077638628784),
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

    const requestLiefkenshoekWorkHome = {
        origin: work,
        destination: home,
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

    const requestKennedyHomeWork = {
        origin: home,
        destination: work,
        waypoints: [
            {
                location: new google.maps.LatLng(51.20577389826643, 4.371102733687848),
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

    const requestKennedyWorkHome = {
        origin: work,
        destination: home,
        waypoints: [
            {
                location: new google.maps.LatLng(51.2057793895194, 4.371400734890418),
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

    directionsService.route(requestLiefkenshoekHomeWork, function(result, status) {
        if(status == 'OK') {
            document.getElementById("twlt").textContent = result.routes[0].legs[0].duration_in_traffic.text
            document.getElementById("twld").textContent = result.routes[0].legs[0].distance.text
            directionsRendererLiefkenshoekTW.setDirections(result);
        }
    });

    directionsService.route(requestLiefkenshoekWorkHome, function(result, status) {
        if(status == 'OK') {
            document.getElementById("wtlt").textContent = result.routes[0].legs[0].duration_in_traffic.text
            document.getElementById("wtld").textContent = result.routes[0].legs[0].distance.text
            directionsRendererLiefkenshoekWT.setDirections(result);
        }
    });

    directionsService.route(requestKennedyHomeWork, function(result, status) {
        if(status == 'OK') {
            document.getElementById("twkt").textContent = result.routes[0].legs[0].duration_in_traffic.text
            document.getElementById("twkd").textContent = result.routes[0].legs[0].distance.text
            directionsRendererKennedyTW.setDirections(result);
        }
    });

    directionsService.route(requestKennedyWorkHome, function(result, status) {
        if(status == 'OK') {
            document.getElementById("wtkt").textContent = result.routes[0].legs[0].duration_in_traffic.text
            document.getElementById("wtkd").textContent = result.routes[0].legs[0].distance.text
            directionsRendererKennedyWT.setDirections(result);
        }
    });
}