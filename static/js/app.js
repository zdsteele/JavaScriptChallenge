// Assign the data from `data.js` to a descriptive variable
var Sightings = data;

// Select the button
var button = d3.select("#filter-btn");

renderData(data, d3.select('tbody'));

button.on("click", function () {
	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	// Get the value property of the input element
	var inputValue = inputElement.property("value");
	var filteredData = Sightings.filter(ufo => ufo.datetime === inputValue);
	var tbody = d3.select("tbody");

	renderData(filteredData, tbody);
})

function renderData(data, target){
	target.html("")

	data.forEach(function (ufoReport) {
		var row = target.append("tr");

		Object.entries(ufoReport).forEach(function ([key, value]) {
			var cell = row.append("td");
			cell.text(value);
		});
	});
}

