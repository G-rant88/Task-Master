// var key = "AIzaSyBm04RwZjjDTqmjQlDjzAH3zSAJwSSlIgs";
// var start = "10995+Le+Conte+Ave&destination=10995+Le+Conte+Ave";
// var end = "10995+Le+Conte+Ave&destination=10995+Le+Conte+Ave";
// var search = "restaurants";
// var waypoints = "10995+Le+Conte+Ave&destination=10995+Le+Conte+Ave"
// var mapsUrl = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=initMap";
// var placesUrl = "https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places";
// var home = "123 Main St, Northeast Harbor, ME 04662, United States";



// var map;
// var service;
// var infowindow;
// var search = $("#thing1").val();




// // service = new google.maps.places.PlacesService(map);
// // service.textSearch(request, callback);


// function initialize() {
//   var home = new google.maps.LatLng(44.29371940000001, -68.2890729);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: home,
//       zoom: 15
//     });

//   var request = {
//     location: home,
//     radius: '500',
//     query: 'food'
//   };

// service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);


// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }


















var start = $("#starts").val();



  $("#sub3").on("click",  function(){
 event.preventDefault();


// Places Search
// function initialize() {
//   var home = new google.maps.LatLng(34.052235, -118.243683);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: home,
//       zoom: 15
//     });

//   var request = {
//     location: home,
//     radius: '500',
//     type: ['restaurant']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }







 var directionsDisplay,
    directionsService,
    map;



var map;
var service;
var infowindow;

// Maps Search
function initialize() {
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  var home = new google.maps.LatLng(34.052235, -118.243683);
  var mapOptions = { zoom:7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: home }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

      

initialize();

});




// var places = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+in+123+main+street&key=AIzaSyDiU0yNUkknW32yOxZpTm4Cii_z8YqttuE";



//  $.ajax({


//   url: places,
//    method: "GET"

     
     


//  }).done(function(info){

//  var business = ("<p> Name: " + info.results.name);
//  var rating = ("<p> rating: " + info.results.rating);
//  var address = ("<p> address: " + info.results.formatted_address);

//  $("#print").append(business, rating, address);

//  });

//  });


      
//  function list(){

// var key = "AIzaSyBm04RwZjjDTqmjQlDjzAH3zSAJwSSlIgs";	

//  var placesUrl = "https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places";


//  console.log(search);

// }