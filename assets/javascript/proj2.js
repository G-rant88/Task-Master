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
// var search = $("#thing1").val();\
var starting = $("#starts").val();
var searchTerm = $("#thing1").val();
      var map, places, infoWindow;
      var markers = [];
      // var autocomplete;
      // var countryRestrict = {'country': 'us'};
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');



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


















// var start = $("#starts").val();





// service = new google.maps.places.PlacesService(map);
// service.nearbySearch(request, callback);

// Places Search
 // var directionsDisplay,
 //    directionsService,
 //    map;



// var map;
// var service;
// var infowindow;

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

     




// Maps Search
 // var directionsDisplay,
 //    directionsService,
 //    map;



// var map;
// var service;
// var infowindow;


// function initialize() {
//   var directionsService = new google.maps.DirectionsService();
//   directionsDisplay = new google.maps.DirectionsRenderer();
//   var home = new google.maps.LatLng(34.052235, -118.243683);
//   var mapOptions = { zoom:11, mapTypeId: google.maps.MapTypeId.ROADMAP, center: home }
//   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//   directionsDisplay.setMap(map);
// }

      

// initialize();

// });




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


  $("#sub3").on("click",  function(){
 event.preventDefault();



      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: countries['us'].zoom,
          center: countries['us'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
    
places = new google.maps.places.PlacesService(map);
autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: [starting],
              
            });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);
      

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        searchTerm = $("#searchs").val();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
      }
  }

 }      

function search() {
     
        var search = {
        
          types: [searchTerm]
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }



   search();

function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      
}

});

