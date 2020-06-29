
// var submit = document.getElementById("submit");
// submit.addEventListener("click", function() {
//   getWeatherInfo();
// });

// function getWeatherInfo() {
// var city = document.getElementById("city").value;


fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=atlanta&units=imperial&appid=1506e7234cdde16a04f0552631be2b2d"
)
  // Converts the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    //Use 'querySelector' to get the ID of where elements will be displayed
    // var name = document.getElementById("name");
    // var date = moment().format('M/DD/YYYY');
    // var image = document.getElementById("image")
    // var temp = document.getElementById("temp");
    // var humidity = document.getElementById("humidity");
    // var wind = document.getElementById("wind");
    // var UV = document.getElementById("UV");
    // var iconUrl = "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png"; 


    // // Main Weather Container Content 
    //  name.innerHTML = json.city.name + " (" + date + ")";
    //  image.innerHTML= " <img src=" + iconUrl +">"; 
    //  temp.innerHTML = "Temperature: " + json.list[0].main.temp + " °F";
    //  humidity.innerHTML = "Humidity: " + json.list[0].main.humidity + "%";
    //  wind.innerHTML = "Wind Speed: " + json.list[0].wind.speed + " MPH"; 
    //  UV.innerHTML = "UV Index: "
    
     var date = moment().format('M/DD/YYYY');
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png"; 
     
     $("#weatherContainer").append(
       "<div class='listGroup col-12 col-md-12'>"
       +  "<h3 class='oneDayTitle'>" +  json.city.name + " (" + date + ")" +"</h3>"
       +  "<div class='oneDay'>"  + "<img src=" + iconUrl +">" + "</div>"
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
    ); // End of append 

    // Day 1 Forecast Content
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[1].weather[0].icon + ".png";

    $("#day1").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(1, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[1].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[1].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); // End of append 

     // Day 2 Forecast Content
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[2].weather[0].icon + ".png";

     $("#day2").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(2, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[2].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[2].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); // End of append 

    // Day 3 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[3].weather[0].icon + ".png";

    $("#day3").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(3, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[3].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[3].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); // End of append 

     // Day 4 Forecast Content 
     var iconUrl = "http://openweathermap.org/img/w/" + json.list[4].weather[0].icon + ".png";

     $("#day4").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(4, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[4].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[4].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); // End of append 

    // Day 5 Forecast Content 
    var iconUrl = "http://openweathermap.org/img/w/" + json.list[5].weather[0].icon + ".png";

    $("#day5").append(
      "<div class='forecast card col s12 m6'>"
      +  "<div class='card-title'>" +  moment().add(5, 'days').format('M/DD/YYYY') +"</div>"
      +  "<div class='card-text'>"  + "<img src=" + iconUrl +">" + "</div>"
      +  "<div class='card-text'>" + "Temp: " + json.list[5].main.temp + " °F" + "</div>"
      +  "<div class='card-text'>" + "Humidity: " + json.list[5].main.humidity + "%" + "</div>" 
      + "</div>" 
     ); // End of append 
  });







  //event listener for button includes display and local storage

  //capture input to local storage + persist