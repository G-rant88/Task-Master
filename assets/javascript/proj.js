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

$("#sub4").on("click", function(){

	var location2 = $("#starts").val().trim();
	
console.log(location2);

	$("#ends").val(location2);


});

	$("#sub3").on("click", function(){

		
		lat = [];
	 	lng = [];


		var query = $("#thing1").val().trim();
		var location = $("#starts").val().trim();
		
		var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=7&near=" + location + "%2C%20CA%2C%20United%20States&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

		$.ajax({

		url: url,
		method: "GET"

		}).done( function (call){


			for (var i = 0; i < 7; i++) {
				
				var newDiv = $("<div>");
				newDiv.attr("undef", call.response.venues[i].location.address);
				newDiv.attr("undef2", call.response.venues[i].name);
				newDiv.attr("undef3", call.response.venues[i].categories[0]);
				

				if (newDiv.attr("undef") === undefined || newDiv.attr("undef2") === undefined
					|| newDiv.attr("undef3") === undefined){

					i++;
				}


				// newDiv.addClass("list-group list-group-item active");
				// newDiv.attr("value", i)
				// newDiv.attr("location", call.response.venues[i].location.address + ", " + call.response.venues[i].location.city);
				


				var storeName = call.response.venues[i].name;
				var storeLocation = call.response.venues[i].location.address + ", " + call.response.venues[i].location.city
				var storeCategory = call.response.venues[i].categories[0].name;

				// ///////
				// var newDiv = $("<div>");
				// newDiv.addClass("list-group list-group-item active");
				// newDiv.attr("id", i);
				// newDiv.attr("location",storeLocation);
				// var p = $("<h4>");
				// var p2 = $("<p>");
				// var p3 = $("<p>");
				// var newDiv2 = $("<div>");
				// var venuePic = $("<img>");
				// var venueTip = $("<p>");
				// p.addClass("list-group-item-heading");
				// p2.addClass("list-group-item-text");
				// p3.addClass("list-group-item-text");
				// p.append("Name: " + storeName);
				// p2.append("Location: " + storeLocation);
				// p3.append("Category: " + storeCategory);
				// ////////
				
			 	lats = call.response.venues[i].location.lat;
				lngs = call.response.venues[i].location.lng;

				lat.push(lats);
				lng.push(lngs);

				 // console.log(lng, lat);
				 // console.log(url);


				var venueId = call.response.venues[i].id
				var venuePicUrl = "https://api.foursquare.com/v2/venues/"+ venueId + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";
				var venueTipUrl = "https://api.foursquare.com/v2/venues/"+ venueId + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";
				// p2.append("Location: " + call.response.venues[i].location.address + ", " + call.response.venues[i].location.city);
				// p2.addClass("list-group-item-text");

				console.log(venueId);

				$.ajax({

					url: venuePicUrl,
					method: "GET"

				}).done(function(pictures){

					var pictureDisplay = pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix;

					 
					// console.log(venuePic);
					// console.log(pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);

					$.ajax({
					url:venueTipUrl,
					method:"GET"
				
						}).done(function(tips){

							var newDiv = $("<div>");
							var p = $("<h4>");
							var p2 = $("<p>");
							var p3 = $("<p>");
							var newDiv2 = $("<div>");
							var venuePic = $("<img>");
							var venueTip = $("<p>");

							newDiv.addClass("list-group list-group-item active");
							newDiv.attr("id", i);
							newDiv.attr("location",storeLocation);
							

							p.addClass("list-group-item-heading");
							p.append("Name: " + storeName);

							p2.addClass("list-group-item-text");
							p2.append("Location: " + storeLocation);
							
							p3.addClass("list-group-item-text");
							p3.append("Category: " + storeCategory);

							venuePic.attr("src", pictureDisplay );
							venueTip.append(tips.response.tips.items[0].text);

							console.log(tips.response.tips.items[0].text);
							console.log(venueTip);
							
							// $("#list").append(newDiv2);
							// $("#list").prepend(newDiv);

							// p.append("Name: " + storeName);
							// p2.append("Location: " + storeLocation);
							// p3.append("Category: " + storeCategory);

							// newDiv.append(p, p2, p3);
							// newDiv2.append(venuePic, venueTip);
							// $("#list").append(newDiv, newDiv2);
							newDiv.append(p, p2, p3,venuePic, venueTip);
						
							$("#list").append(newDiv);

						});

				});
				
				// newDiv.append(p, p2, p3);
				// $("#list").append(newDiv);
				

			}
			//pictures and reviews ajax calls begin

			
		});

	});



	$(document).on("click", ".list-group", function() {

		

		$("#thinghere").append(this);
		$(this).attr("id", "choice");
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

		$("#directionHere").empty();
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

	            		console.log(totalDistance);

	            		var x = ((totalDistance*0.621371)/1000).toFixed(1)

	            		totalDistance = Math.round(x*100)/100 + "mi";
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