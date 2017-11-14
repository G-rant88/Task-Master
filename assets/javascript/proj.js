$(document).ready(function() {

	var lat = [];
	var lng = [];
	var myLats = [];
	var myLngs = [];
	var p = $("<p>");
	var pics0 = $("<img>");
	var pics1 = $("<img>");
	var pics2 = $("<img>");
	var pics3 = $("<img>");
	var pics4 = $("<img>");
	var tips0 = $("<p>");
	var tips1 = $("<p>");
	var tips2 = $("<p>");
	var tips3 = $("<p>");
	var tips4 = $("<p>");
	var divy0 = $("<div>");
	var divy1 = $("<div>");
	var divy2 = $("<div>");
	var divy3 = $("<div>");
	var divy4 = $("<div>");
	



	var wayPointList = [];
	var listcount = 1;

	var thislist =[] ;
	$("#direction-panel").hide();

	$("#sub1").on("click", function(){

		var location = $("#starts").val().trim();
		$("#starthere").html("Searching Near: " + location);

	});

	$("#sub3").on("click", function(){

		
		tips0.empty();
		tips1.empty();
		tips2.empty();
		tips3.empty();
		tips4.empty();
		pics0.empty();
		pics1.empty();
		pics2.empty();
		pics3.empty();
		pics4.empty();
		
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
				newDiv.attr("id", i);
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
			//pictures and reviews ajax calls begin
			if ($(".list-group").attr("id") !== "choice"){
		
	

				var venid0 = call.response.venues[0].id
				var url2 = "https://api.foursquare.com/v2/venues/"+ venid0 + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url2,
		method: "GET"

		}).done(function (pictures){

			if (pictures.response.photos.items[0] === undefined){

				 pics0.attr("src", "assets/images/no-image.jpg");
				 pics0.css("height", "100px");
				 pics0.css("width", "100px");
			}
			
				 pics0.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
		
	
				// $("#0").append(pics);
	

		});

		var venidt0 = call.response.venues[0].id
				var urlt0 = "https://api.foursquare.com/v2/venues/"+ venidt0 + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: urlt0,
		method: "GET"

		}).done(function (tips){
			
				 
				 tips0.append(tips.response.tips.items[0].text)

				divy0.append(pics0, tips0);
			pics0.css("float", "left");
				 pics0.css("margin-right", "8px");
				 pics0.css("margin-top", "8px");
				 pics0.css("border", "2px solid gray");
				 tips0.css("padding-top", "15px");
				 tips0.css("text-align", "justify");
				 $("#0").css("overflow", "auto");



				$("#0").append(divy0);
	

		});

						var venid1 = call.response.venues[1].id
				var url3 = "https://api.foursquare.com/v2/venues/"+ venid1 + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url3,
		method: "GET"

		}).done(function (pictures){

			if (pictures.response.photos.items[0] === undefined){

				 pics1.attr("src", "assets/images/no-image.jpg");
				 pics1.css("height", "100px");
				 pics1.css("width", "100px");
			}
			
				 pics1.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
	
				// $("#1").append(pics1);
	

		});

		var venidt1 = call.response.venues[1].id
				var urlt1 = "https://api.foursquare.com/v2/venues/"+ venidt1 + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: urlt1,
		method: "GET"

		}).done(function (tips){
			
				 
				 tips1.append(tips.response.tips.items[0].text)

				divy1.append(pics1, tips1);
			pics1.css("float", "left");
				 pics1.css("margin-right", "8px");
				 pics1.css("margin-top", "8px");
				 tips1.css("padding-top", "15px");
				 tips1.css("text-align", "justify");
				 pics1.css("border", "2px solid gray");
				 $("#1").css("overflow", "auto");



				$("#1").append(divy1);
	

		});





							var venid2 = call.response.venues[2].id
				var url4 = "https://api.foursquare.com/v2/venues/"+ venid2 + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url4,
		method: "GET"

		}).done(function (pictures){

			if (pictures.response.photos.items[0] === undefined){

				 pics2.attr("src", "assets/images/no-image.jpg");
				 pics2.css("height", "100px");
				 pics2.css("width", "100px");
			}
			
				 pics2.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
	
				// $("#2").append(pics2);
	

		});


var venidt2 = call.response.venues[2].id
				var urlt2 = "https://api.foursquare.com/v2/venues/"+ venidt2 + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: urlt2,
		method: "GET"

		}).done(function (tips){
			
				 
				 tips2.append(tips.response.tips.items[0].text)

				divy2.append(pics2, tips2);
				 pics2.css("float", "left");
				 pics2.css("margin-right", "8px");
				 pics2.css("margin-top", "8px");
				 tips2.css("padding-top", "15px");
				 tips2.css("text-align", "justify");
				 pics2.css("border", "2px solid gray");
				 $("#2").css("overflow", "auto");



				$("#2").append(divy2);
	

		});






				var venid3 = call.response.venues[3].id
				var url5 = "https://api.foursquare.com/v2/venues/"+ venid3 + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url5,
		method: "GET"

		}).done(function (pictures){

			if (pictures.response.photos.items[0] === undefined){

				 pics3.attr("src", "assets/images/no-image.jpg");
				 pics3.css("height", "100px");
				 pics3.css("width", "100px");
			}
			
				 pics3.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
	
				// $("#3").append(pics3);
	

		});


var venidt3 = call.response.venues[3].id
				var urlt3 = "https://api.foursquare.com/v2/venues/"+ venidt3 + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: urlt3,
		method: "GET"

		}).done(function (tips){
			
				 
				 tips3.append(tips.response.tips.items[0].text)

				divy3.append(pics3, tips3);
				 pics3.css("float", "left");
				 pics3.css("margin-right", "8px");
				 pics3.css("margin-top", "8px");
				 tips3.css("padding-top", "15px");
				 tips3.css("text-align", "justify");
				 pics3.css("border", "2px solid gray");
				 $("#3").css("overflow", "auto");



				$("#3").append(divy3);
	

		});




				var venid4 = call.response.venues[4].id
				var url6 = "https://api.foursquare.com/v2/venues/"+ venid4 + "/photos?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: url6,
		method: "GET"

		}).done(function (pictures){

			if (pictures.response.photos.items[0] === undefined){

				 pics4.attr("src", "assets/images/no-image.jpg");
				 pics4.css("height", "100px");
				 pics4.css("width", "100px");
			}
			
				 pics4.attr("src", pictures.response.photos.items[0].prefix + "100x100" + pictures.response.photos.items[0].suffix);
	
				// $("#4").append(pics4);
	

		});


var venidt4 = call.response.venues[4].id
				var urlt4 = "https://api.foursquare.com/v2/venues/"+ venidt4 + "/tips?/&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

					$.ajax({

		url: urlt4,
		method: "GET"

		}).done(function (tips){
			
				 
				 tips4.append(tips.response.tips.items[0].text)

				divy4.append(pics4, tips4);
				 pics4.css("float", "left");
				 pics4.css("margin-right", "8px");
				 pics4.css("margin-top", "8px");
				 tips4.css("padding-top", "15px");
				 tips4.css("text-align", "justify");
				 pics4.css("border", "2px solid gray");
				 $("#4").css("overflow", "auto");



				$("#4").append(divy4);
	

		});

		//pictures and reviews ajax calls end
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