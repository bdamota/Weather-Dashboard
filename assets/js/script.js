
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
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=1506e7234cdde16a04f0552631be2b2d&q=" + city 
)
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
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png"; 
     
     $("#weatherContainer").append(
       "<div class='listGroup col-12 col-md-12'>"
       +  "<h3 class='oneDayTitle'>" +  json.city.name + " (" + date + ")" +"</h3>"
       +  "<div class='oneDayIcon'>"  + "<img src=" + iconUrl +">" + "</div>"
       +  "<div class='oneDay'>" + "Temperature: " + json.list[0].main.temp + " °F" + "</div>"
       +  "<div class='oneDay'>" + "Humidity: " + json.list[0].main.humidity + "%" + "</div>" 
       +  "<div class='oneDay'>" + "Wind Speed: " + json.list[0].wind.speed + " MPH" + "</div>" 
       +  "<div class='oneDay'>" + "UV Index: "  + "</div>" 
       +
       "</div>"
     )
     
    // Five Day Header
    $("#fiveDay").append(
      "<div class='col-md-12'>"
      +
      "<h4 id='fiveDay'>" + "5-Day Forecast:" + "</h4>" 
      +"</div>"
    ); 

    // Day 1 Forecast Content
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[1].weather[0].icon + ".png";

    $("#day1").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(1, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[1].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[1].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

     // Day 2 Forecast Content
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[2].weather[0].icon + ".png";

     $("#day2").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(2, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[2].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[2].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

    // Day 3 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[3].weather[0].icon + ".png";

    $("#day3").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(3, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[3].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[3].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

     // Day 4 Forecast Content 
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[4].weather[0].icon + ".png";

     $("#day4").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(4, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[4].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[4].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 

    // Day 5 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[5].weather[0].icon + ".png";

    $("#day5").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(5, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[5].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[5].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); 
  });
}







  //event listener for button includes display and local storage

