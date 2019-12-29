$(document).ready(function() {


	var backupId = 'YH0YWR1USH0WZMOEHB4QUN4KDREBLGGJ4URTCLJ4CMNBIGZ1';
	var backupSecret = 'ERMSG2QGCCAETKYI0KP3SBNBGCHJGITZU1W2WTPIRDHNMEDI';
	var id ='YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5';
	var secret = 'UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU';
	var lat = [];
	var lng = [];
	var myLats = [];
	var myLngs = [];
	var p = $("<p>");

	var searchResults = [];
	
	var wayPointList = [];
	var listcount = 1;

	var thislist =[] ;
	var items = ['To Travel is To Live', 'The biggest risk in life, is not taking one', 'When was the last time you did something for the first time?', 'Life begins at the end of your comfort zone', 'Two roads diverged in a wood and I took the one less traveled by.', 'Yesterday, I believe I never would have done what I did today', 'You can, you should, and if you‘re brave enough to start, you will.', 'Life is either a daring adventure or nothing at all', 'Travel far enough, you meet yourself', 'To Live will be an awfully big adventure', 'A ship in harbor is safe, but that is not what ships are built for.', 'The world is big and I want to get a good look at it before it gets dark.'];
	var item = items[Math.floor(Math.random()*items.length)];
	$("#slogan").text(item);
	$("#direction-panel").hide();

	$("#sub4").on("click", function(){

	var location2 = $("#starts")
	.val().trim();
	

	$("#ends").val(location2);


	});

	$("#sub3").on("click", function(){

		
		lat = [];
	 	lng = [];

	 	searchResults = [];


		var query = $("#thing1").val().trim();
		var location = $("#searchs").val().trim();
		
		var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=10&near=" + location + "&client_id=" + backupId + "&client_secret=" + backupSecret + "&v=20140806&m=foursquare";

		$.ajax({

		url: url,
		method: "GET"

		}).done( function (call){


			for (var i = 0; i < 10; i++) {
				
				var newDiv = $("<div>");
				newDiv.attr("undef", call.response.venues[i].location.address);
				newDiv.attr("undef2", call.response.venues[i].name);
				newDiv.attr("undef3", call.response.venues[i].categories[0]);
			
				if (newDiv.attr("undef") === undefined || newDiv.attr("undef2") === undefined
					|| newDiv.attr("undef3") === undefined){

					i++;
				}

				var storeName = call.response.venues[i].name;
				var storeLocation = call.response.venues[i].location.address + ", " + call.response.venues[i].location.city
				var storeCategory = call.response.venues[i].categories[0].name;
				
			 	lats = call.response.venues[i].location.lat;
				lngs = call.response.venues[i].location.lng;

				lat.push(lats);
				lng.push(lngs);

				var venueId = call.response.venues[i].id
				var venuePicUrl = "https://api.foursquare.com/v2/venues/"+ venueId + "/photos?/&client_id=" + backupId + "&client_secret=" + backupSecret + "&v=20140806&m=foursquare";
				var venueTipUrl = "https://api.foursquare.com/v2/venues/"+ venueId + "/tips?/&client_id=" + backupId + "&client_secret=" + backupSecret + "&v=20140806&m=foursquare";


				searchResults.push({
					name:storeName,
					address:storeLocation,
					category:storeCategory,
					id:venueId,
					picUrl:venuePicUrl,
					tipUrl:venueTipUrl,

				})

			}

			for (var i = 0; i <searchResults.length;i++){


				(function(i){

					$.ajax({
					url: searchResults[i].picUrl,
					method: "GET"
					}).done(function(pictures){

						var pictureDisplay = pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix;
						searchResults[i].image = pictureDisplay;

							$.ajax({
							url: searchResults[i].tipUrl,
							method: "GET"
							}).done(function(tips){

								var tipsDisplay = tips.response.tips.items[0].text;
								searchResults[i].tips = tipsDisplay;

								console.log(searchResults[i].image);
								var current = searchResults[i];
								console.log(current);

								console.log(current.image);
								console.log(current.address);

								var newDiv = $("<div>");
								var newDivTop = $("<div>");
								var newDivMid = $("<div>");
								var p = $("<h4>");
								var p2 = $("<p>");
								var p3 = $("<p>");
								var newDiv2 = $("<div>");
								var venuePic = $("<img>");
								var venueTip = $("<p>");

								newDiv.addClass("list-group list-group-item active");
								newDiv.attr("id", i);
								newDiv.attr("location",current.address);

								p.addClass("list-group-item-heading");
								p.append("Name: " + current.name);
								newDivTop.addClass("list-group-div");
								newDivTop.append(p);

								p2.addClass("list-group-item-text");
								p2.append("Location: " + current.address);
								
								p3.addClass("list-group-item-text");
								p3.addClass("list-group-category");
								p3.append("Category: " + current.category);
								newDivMid.addClass("list-group-div");
								newDivMid.append(p2, p3);

								venuePic.attr("src", current.image );
								venueTip.append(current.tips);

								newDiv2.addClass("list-group-div");
								newDiv2.append(venuePic, venueTip);
								newDiv.append(newDivTop, newDivMid, newDiv2);
								
							
								$("#list").append(newDiv);
							

							});

						});
    
				})(i);
				
			}

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