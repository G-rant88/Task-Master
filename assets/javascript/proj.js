$(document).ready(function() {

	var lat = [];
	var lng = [];
	var myLats = [];
	var myLngs = [];
	var p = $("<p>");

	var wayPointList = [];
	var listcount = 1;

	var thislist =[] ;


	$("#sub1").on("click", function(){

		var location = $("#starts").val().trim();
		$("#starthere").html("Searching Near: " + location);

	});

	$("#sub3").on("click", function(){
		 
		lat = [];
	 	lng = [];

		var query = $("#thing1").val().trim();
		var location = $("#starts").val().trim();
		
		var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=5&near=" + location + "%2C%20CA%2C%20United%20States&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

		$.ajax({

		url: url,
		method: "GET"

		}).done( function (call){

			for (var i = 0; i < 5; i++) {
					// console.log(call);
				var newDiv = $("<div>");
				newDiv.addClass("list-group list-group-item active");
				newDiv.attr("value", i)
				newDiv.attr("location",call.response.venues[i].location.formattedAddress);

				var p = $("<h4>");
				var p2 = $("<p>");
				var p3 = $("<p>");


				p.addClass("list-group-item-heading");
				p.append("Name: " + call.response.venues[i].name);

				p2.append("Location: " + call.response.venues[i].location.formattedAddress);
				p2.addClass("list-group-item-text");

				p3.addClass("list-group-item-text");
				p3.append("Category: " + call.response.venues[i].categories[0].name);
				 

				newDiv.append(p, p2, p3);

			 	lats = call.response.venues[i].location.lat;
				lngs = call.response.venues[i].location.lng;

				 lat.push(lats);
				 lng.push(lngs);

				 console.log(lng, lat);

				$("#list").append(newDiv);

				}

			});

		});


	$(document).on("click", ".list-group", function() {

		$("#thinghere").append(this);
		
		$("#list").html("");
		$("#thing1").val("");
		wayPointList.push($(this).attr("location"));
		console.log(wayPointList);

		$(this).addClass("selected");
		$(this).removeClass("list-group")

		myLats.push(lat[$(this).attr("value")]);
		myLngs.push(lng[$(this).attr("value")]);

		});

	$("#route").on("click",function (){

	initMap();
	       
	 function initMap() {

	        var directionsService = new google.maps.DirectionsService;
	        var directionsDisplay = new google.maps.DirectionsRenderer;
	      
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 6,
	          center: {lat: lat[0], lng: lng[0]}
	        });
	        directionsDisplay.setMap(map);
	        calculateAndDisplayRoute(directionsService, directionsDisplay);


	        
	    }

	    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	        
	        var waypts = [];

	        for (var i=0;i <wayPointList.length;i++){

	        waypts.push({
	              location: wayPointList[i],
	              stopover: true
	         });

	        }


	        directionsService.route({

	          origin: $("#starts").val(),
	          destination: $("#ends").val(),
	          waypoints: waypts,
	          optimizeWaypoints: true,
	          travelMode: 'DRIVING'

	        }, 

	        function(response, status) {

	          if (status === 'OK') {

	            directionsDisplay.setDirections(response);
	           

	            var route = response.routes[0];
	            var summaryPanel = document.getElementById('directions-panel');
	            console.log(route.legs);
	            console.log(route);

	          } else {
	            window.alert('Directions request failed due to ' + status);
	          }
	          
	        });
	        
	     }
	   });

	$(document).on("click",".selected", function(){
		
		wayPointList.pop($(this).attr("location"))
		console.log(wayPointList);
		$(this).remove();
	});
	   


});