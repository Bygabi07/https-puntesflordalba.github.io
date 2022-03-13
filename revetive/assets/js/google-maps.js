function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.207690, lng: 106.985270};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11937.679564828077!2d2.5482215!3d41.5817982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e2662de3b7fe8d3!2sMuseu%20d%E2%80%99Arenys%20de%20Mar!5e0!3m2!1sca!2ses!4v1647190245463!5m2!1sca!2ses" width="1000" height="1500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    });
}