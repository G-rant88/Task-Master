$(document).ready(function() {

	var lat = [];
	var lng = [];
	var myLats = [];
	var myLngs = [];
	var p = $("<p>");

	var wayPointList = [];
	var listcount = 1;

	var thislist =[] ;
	$("#direction-panel").hide();

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
				newDiv.attr("value", i);
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
				


				
			 	lats = call.response.venues[i].location.lat;
				lngs = call.response.venues[i].location.lng;

				 lat.push(lats);
				 lng.push(lngs);

				 // console.log(lng, lat);
				 // console.log(url);

				 newDiv.append(p, p2, p3)
				 $("#list").append(newDiv);


}

for (var i = 0; i < 5; i++) {

				var venid = call.response.venues[i].id
				var url2 = "https://api.foursquare.com/v2/venues/"+ venid + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url2,
		method: "GET"

		}).done(function (pictures){
			

// 			var newDiv2 = $("<div>");
// newDiv2.attr("value", i);
				
			var pics = $("<img>");
			 pics.attr("value", i);
			 
				 pics.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
			
				  pics.addClass("photo");
		

			// newDiv.attr("value", i).append(pics.attr("val", i));
			
			// newDiv2.append(pics)
		 newDiv.val(i).append(pics.val(i));

			
			
	

		});

};

	


				


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

		$("#direction-panel").show();

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
	            
	            var totalDistance  = 0;
	            var totalTime = 0;

	            var legs = route.legs;

	            for(var i = 0; i < legs.length; i++){
	            	totalDistance += legs[i].distance.value;
	            	totalTime +=legs[i].duration.value;
	            	console.log(totalDistance+"km");
	            	console.log(totalTime);

	            	var newDiv = $("<div>");
	            	var p1 = $("<p>");
	            	// var p2 = $("<p>");

	            	p1.append("Trip "+ (i+1) +": "+legs[i].distance.text +" "+legs[i].duration.text);

	            	newDiv.append(p1);
	            	newDiv.addClass("trips");

	            	$("#directionHere").append(newDiv);

	            	if(i === (legs.length - 1)){
						
						var newDiv = $("<div>");
	            		var p1 = $("<h5>");
	            		// var span = $("<span>")

	            		totalDistance = (Math.ceil((totalDistance/0.621371)/1000)) + "mi";
	            		totalTime = (Math.ceil(totalTime/60)+"mins")

	            		p1.append("Total Distance: "+totalDistance+"  "+ "Total Time: " +totalTime);
	            		newDiv.append(p1);
	            		$("#directionHere").prepend(newDiv);
	            	};
	            };


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