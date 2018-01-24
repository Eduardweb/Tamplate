
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        zoomControl: false,
        scrollwheel: false,
        scaleControl: false,
        rotateControl: false,
        panControl: false,
        mapMaker: false,
        disableDefaultUI: false,
        streetViewControl: false,
        signInControl: false,
        mapTypeControl: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(39.2616421, -84.3420697), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ff00a6"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"lightness":"64"},{"saturation":"-100"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#e0e0e0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.2616421, -84.3420697),
        map: map,
        title: 'Rina System',
        icon: 'img/icons/marker.png',
    });


    // Enable scroll zoom after click on map
    map.addListener('click', function() {
      map.setOptions({
          scrollwheel: true
      });
   });


   // Enable scroll zoom after drag on map
   map.addListener('drag', function() {
      map.setOptions({
          scrollwheel: true
      });
   });


   // Disable scroll zoom when mouse leave map
   map.addListener('mouseout', function() {
      map.setOptions({
          scrollwheel: false
      });
   });
}
