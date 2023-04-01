const alpbach = { lat: 47.398363, lng: 11.946992 };
let map;

export function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        let z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80);
    }
} 

export function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: alpbach,
        mapTypeId: 'satellite'
    });
    const marker = new google.maps.Marker({
        position: alpbach,
        map: map,
    });
}

export function getMap() {
    return map;
}

export function createStreetView() {
    return new google.maps.StreetViewPanorama(
        document.getElementById("map"),
        {
            position: alpbach,
            pov: {
                heading: 180,
                pitch: 5,
            },
        }
    );
}
