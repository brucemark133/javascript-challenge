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
var input=d3.select("input")
var submit = d3.selectAll(".filter")
new_dict= {}
function handle_click(){
    var input_element = d3.select(this).select("input")
    var input_value =  input_element.property("value")
    var input_id = input_element.attr("id")
    new_dict[input_id]= input_value
    create_new_table()
}
function create_new_table(){
    let new_data = data
    Object.entries(new_dict).forEach(function([key, value]){
    new_data = new_data.filter(x => x[key]===value)    
    })
    
    var tbody = d3.select('tbody');
    tbody.html("")
    new_data.forEach((sighting) => 
    {var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => 
        {var cell = row.append("td");
        cell.html(value); 
        });
    });
}
submit.on("change", handle_click)



// Object.values(UFO_sighting).forEach(value =>ufo_table.append(value));
// YOUR CODE HERE!
