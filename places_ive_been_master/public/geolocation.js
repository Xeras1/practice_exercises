var map;
var places = [];

if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position){
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  var myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  console.log('aparcao')
  console.log(position)
  createMap(myPosition);
  setupAutocomplete();
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  var mapOptions ={
    center: position,
    zoom: 14
  };
  map = new google.maps.Map($('#map')[0], mapOptions);
  createMarker(position, 'Nuñez de Balboa 116');
  var jsonifiedPlace = JSON.parse(window.localStorage.getItem("place"));
  jsonifiedPlace.forEach(function(element){
    var position = element.geometry.location
    var name = element.formatted_address
    createMarker(position, name)
  })
}


function createMarker(position, name){
  var  marker = new google.maps.Marker({
    position: position,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: name
  });
  marker.addListener('click', function() {
    console.log(this)
    infowindow.open(map, this);
  });
}
  


function setupAutocomplete(){
  var input = $('#get-places')[0];
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if (place.geometry.location) {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      var position = place.geometry.location;
      createMarker(position, place.formatted_address);
      places.push(place);
      var stringifiedPlace = JSON.stringify(places);
      window.localStorage.setItem("place", stringifiedPlace);
    } 
    else {
      alert("The place has no location...?")
    }
  });
}














