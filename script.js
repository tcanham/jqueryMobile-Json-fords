/*
* Author: Thomas Canham
* Assignment: WE3WE4.0 Mobile Web Applications, Digital Skills Academy
* Date : 2016/05/12
* Ref: https://api.jquerymobile.com/listview/#method-refresh
*/


// I have uesd an absolute path here to the local file to indicate the point where a live feed could enter.

$.getJSON('js/cars.json', function(data) {

// Set variable to hold the mark up to append to the page elements	
var listItem="";
var ulListItem = "";

	for(i=0;i<data.cars.length;i++){
	listItem += '<li><a href="#'+data.cars[i].model+'"data-transition="flip">'+data.cars[i].model+'</a></li>';
	ulListItem += '<li>'+data.cars[i].model+'</li>';
	}
	// Append the variable to the listview then refresh to update the css styles. Without the refresh the links will not be hidden.
	$("#carList").append(listItem).listview("refresh");
	$("#panelCarList").append(ulListItem).listview("refresh");
});



