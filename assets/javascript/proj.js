// var query = $("#thing1").val();
// var location = $("#starts").val();
// var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=5&near=" + location + "&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

	var p = $("<p>");
$("#sub1").on("click", function(){

var location = $("#starts").val().trim();
$("#starthere").html("Searching Near: " + location);


});

$("#sub3").on("click", function(){
var query = $("#thing1").val().trim();
var location = $("#starts").val().trim();
	// var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=5&near=North%20Hollywood%20Los%20Angeles%2C%20CA%2C%20United%20States&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";
 var url = "https://api.foursquare.com/v2/venues/search?&query=" + query + "&mode=url&limit=5&near=" + location + "%2C%20CA%2C%20United%20States&client_id=YDAI3HM532ZHCLP4XBC4Z5OCOO2YN5JT3Q3SP4C3EKDNZKT5&client_secret=UQKRY5R4YPYKDQAQNUCVSSVGGPMUXPQA1XSIJOIQT5ZDO4HU&v=20140806&m=foursquare";

$.ajax({

url: url,
method: "GET"

}).done( function (call){

for (var i = 0; i < 5; i++) {
		console.log(call);
	 p = $("<p>");
	// var p2 = $("<p>");
	// var p3 = $("<p>");
	var br = $("<br>")
	var br2 = $("<br>")
	p.append("Name: " + call.response.venues[i].name);
	$("#list").append(p);
	p.append(br2);
	
p.append("Location: " + call.response.venues[i].location.formattedAddress);
$("#list").append(p);
p.append(br);
p.append("Category: " + call.response.venues[i].categories[0].name);
 $("#list").append(p);
}
});

});

// $(document).on("click", p, function() {


// $("#thinghere").append(this);

// });