
function initialize() {
  var myLatlng = new google.maps.LatLng(-2.152642042902179, -79.9160033029541);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize,false);