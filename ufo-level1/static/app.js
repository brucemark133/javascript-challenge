// from data.js
var UFO_sighting = data;
//function to initialize page with all data before filtering


//function Getdata(UFO_sighting){
var table = d3.select("table");
table.attr("class","table table-striped")
console.log(UFO_sighting)
var tbody = d3.select('tbody');
UFO_sighting.forEach((sighting) => 
{var row = tbody.append("tr");
Object.entries(sighting).forEach(([key, value]) => 
    {var cell = row.append("td");
    cell.html(value); 
    });
});
//};
//call function to pull data

//Getdata(ufo_table);

//call function to pull data

// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

//filter date based on what user inputs
var submit = d3.select("#filter-btn")
submit.on("click",function(){
    var input_element = d3.select("#datetime")
    var input_value =  input_element.property("value")
    var filter_date = UFO_sighting.filter(x => x.datetime===input_value)

    var tbody = d3.select('tbody');
    tbody.html("")
    filter_date.forEach((sighting) => 
    {var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => 
        {var cell = row.append("td");
        cell.html(value); 
        });
    });

})



// Object.values(UFO_sighting).forEach(value =>ufo_table.append(value));
// YOUR CODE HERE!
