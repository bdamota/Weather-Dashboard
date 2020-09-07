var submit = document.getElementById("submit");

 submit.addEventListener("click", function() {
  event.preventDefault();
  var city = document.getElementById("city").value;
  var allCities = [];

  allCities = JSON.parse(localStorage.getItem("allCities")) || []; 
  allCities.push(city); 
  localStorage.setItem("allCities", JSON.stringify(allCities)); 

  getWeather();
 });

function getWeather(city) {
  // empties out previous data so that it only shows selected weather 
  $("#weatherContainer").empty();
  $("#fiveDay").empty();
  $("#day1").empty();
  $("#day2").empty();
  $("#day3").empty();
  $("#day4").empty();
  $("#day5").empty();

 var city = document.getElementById("city").value;

 //fetch to Open Weather API
 
	fetch("https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=1506e7234cdde16a04f0552631be2b2d&q=" + city )

  // Converts the response to JSON
  .then(function(response) {
    if (response.ok){
    return response.json();
    } 
    else {
      alert("Enter correct city name.")
    }
   
  })
  .then(function(json) {
     var date = moment().format('M/DD/YYYY');
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[2].weather[0].icon + ".png"; 
     
     $("#weatherContainer").append(
       "<div class='listGroup col-12 col-md-12'>"
       +  "<h3 class='oneDayTitle'>" +  json.city.name + " (" + date + ")" +"</h3>"
       +  "<div class='oneDayIcon'>"  + "<img src=" + iconUrl +">" + "</div>"
       +  "<div class='oneDay'>" + "Time: 12pm " + "</div>"
       +  "<div class='oneDay'>" + "Temperature: " + json.list[2].main.temp + " °F" + "</div>"
       +  "<div class='oneDay'>" + "Humidity: " + json.list[2].main.humidity + "%" + "</div>" 
       +  "<div class='oneDay'>" + "Wind Speed: " + json.list[2].wind.speed + " MPH" + "</div>" 
      //  +  "<div class='oneDay'>" + "UV Index: "  + "</div>" 
       +
       "</div>"
     )
     
    // Five Day Header
    $("#fiveDay").append(
      "<div class='col-md-12'>"
      +
      "<h4 id='fiveDay'>" + "5-Day Forecast: <br> <span id='time'>[Weather at 12pm]</span>" + "</h4>" 
      +"</div>"
    ); 

    // Day 1 Forecast Content
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[10].weather[0].icon + ".png";

    $("#day1").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(1, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[10].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[10].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

     // Day 2 Forecast Content
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[18].weather[0].icon + ".png";

     $("#day2").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(2, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[18].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[18].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

    // Day 3 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[26].weather[0].icon + ".png";

    $("#day3").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(3, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[26].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[26].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

     // Day 4 Forecast Content 
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[34].weather[0].icon + ".png";

     $("#day4").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(4, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[34].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[34].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

    // Day 5 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[39].weather[0].icon + ".png";

    $("#day5").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(5, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[39].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[39].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 
    //  showCities();
  });
}

// // Function to retrieve the stored input that was saved in each input 
// function showCities() {
//   $("#cityButtons").empty(); // empties out previous array 
//   var arrayFromStorage = JSON.parse(localStorage.getItem("allCities")) || []; // Makes all cities searched a string
//   var arrayLength = arrayFromStorage.length; // limits length of array

//   for (var i = 0; i < arrayLength; i++) { // Loop so it prepends all cities within the length of the array
//     var cityFromArray = arrayFromStorage[i]; //

//     $("#cityButtons").append (
//       "<div class='list-group'>"
  
//     // City text
//     + "<button class='list-group-item'>" + cityFromArray 
//     + "</button>")
//   } 
// } 
// showCities (); 

// // show city weather on click 
// $("#cityButtons").on("click", ".list-group-item", function(event) {
//   event.preventDefault();
//   var city = ($(this).text());
//   getWeather(city); 
// }) 
