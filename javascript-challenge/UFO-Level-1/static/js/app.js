//from data.js
let tableData = data;

//YOUR CODE HERE!

//Reference the table body
let tableBody = d3.select("tbody");

//Assign variable for data
let ufoData = data;

//Populate the table with the data from data.js
data.forEach((ufoSighting) => {
    // console.log(ufoSighting);
    let row = tableBody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
});

//Set the button and date field to variables
let button = d3.select("#filter-btn");
let form = d3.select("#form");

//Create event handlers
button.on("click", dataFilter);
form.on("submit", dataFilter);

//Function to filter the data if date entered
function dataFilter() {

    //Prevent the page from refreshing on submit
    d3.event.preventDefault();

    //Select the html 
    let inputDate = d3.select("#datetime");

    //Get the value of what was entered
    let dateValue = inputDate.property("value");

    //Use the date entered to filter the data
    let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);

    //Display filtered rows
    let tbody = d3.select("tbody");

    //Clear displayed data
    tbody.html("");

    //Populate the table area
    filteredData.forEach((foundDate) => {
        console.log(foundDate);
        let newRow = tbody.append('tr');
        Object.entries(foundDate).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);
        });
    });

}