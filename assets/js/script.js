

//var submit = document.getElementById("submit").addEventListener("click", function() {
//var city = document.getElementById("city").value;

fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=atlanta&units=imperial&appid=1506e7234cdde16a04f0552631be2b2d'
  )
    // Converts the response to JSON
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      //Use 'querySelector' to get the ID of where elements will be displayed
      var name = document.getElementById("name");
      var date = moment().format('M/DD/YYYY');
      var temp = document.getElementById("temp");
      var humidity = document.getElementById("humidity");
      var wind = document.getElementById("wind");
      var UV = document.getElementById("UV");


      // Main Weather Container Content 
       name.innerHTML = json.city.name + " (" + date + ")" + " <img type=png src=" + json.list[0].weather[0].icon +">"; 
       temp.innerHTML = "Temperature: " + json.list[0].main.temp + " °F";
       humidity.innerHTML = "Humidity: " + json.list[0].main.humidity + "%";
       wind.innerHTML = "Wind Speed: " + json.list[0].wind.speed + " MPH"; 
       UV.innerHTML = "UV Index: " //json.main.humidity;    

      // Day 1 Forecast Content 
      var dayOneDate =  document.getElementById("dayOneDate");
      var dayOneIcon =  document.getElementById("dayOneIcon");
      var dayOneTemp =  document.getElementById("dayOneTemp");
      var dayOneHumidity =  document.getElementById("dayOneHumidity");

      dayOneDate.innerHTML = moment().add(1, 'days').format('M/DD/YYYY');
      dayOneIcon.innerHTML = " <img type=png src=" + json.list[1].weather[0].icon +">";
      dayOneTemp.innerHTML = "Temp: " + json.list[1].main.temp + " °F";
      dayOneHumidity.innerHTML = "Humidity: " + json.list[1].main.humidity + "%";

       // Day 2 Forecast Content 
       var dayTwoDate =  document.getElementById("dayTwoDate");
       var dayTwoIcon =  document.getElementById("dayTwoIcon");
       var dayTwoTemp =  document.getElementById("dayTwoTemp");
       var dayTwoHumidity =  document.getElementById("dayTwoHumidity");
 
       dayTwoDate.innerHTML = moment().add(2, 'days').format('M/DD/YYYY');
       dayTwoIcon.innerHTML = " <img type=png src=" + json.list[2].weather[0].icon +">";
       dayTwoTemp.innerHTML = "Temp: " + json.list[2].main.temp + " °F";
       dayTwoHumidity.innerHTML = "Humidity: " + json.list[2].main.humidity + "%";

      // Day 3 Forecast Content 
       var dayThreeDate =  document.getElementById("dayThreeDate");
       var dayThreeIcon =  document.getElementById("dayThreeIcon");
       var dayThreeTemp =  document.getElementById("dayThreeTemp");
       var dayThreeHumidity =  document.getElementById("dayThreeHumidity");
 
       dayThreeDate.innerHTML = moment().add(3, 'days').format('M/DD/YYYY');
       dayThreeIcon.innerHTML = " <img type=png src=" + json.list[3].weather[0].icon +">";
       dayThreeTemp.innerHTML = "Temp: " + json.list[3].main.temp + " °F";
       dayThreeHumidity.innerHTML = "Humidity: " + json.list[3].main.humidity + "%";

       // Day 4 Forecast Content 
       var dayFourDate =  document.getElementById("dayFourDate");
       var dayFourIcon =  document.getElementById("dayFourIcon");
       var dayFourTemp =  document.getElementById("dayFourTemp");
       var dayFourHumidity =  document.getElementById("dayFourHumidity");
 
       dayFourDate.innerHTML = moment().add(4, 'days').format('M/DD/YYYY');
       dayFourIcon.innerHTML = " <img type=png src=" + json.list[4].weather[0].icon +">";
       dayFourTemp.innerHTML = "Temp: " + json.list[4].main.temp + " °F";
       dayFourHumidity.innerHTML = "Humidity: " + json.list[4].main.humidity + "%";

      // Day 5 Forecast Content 
       var dayFiveDate =  document.getElementById("dayFiveDate");
       var dayFiveIcon =  document.getElementById("dayFiveIcon");
       var dayFiveTemp =  document.getElementById("dayFiveTemp");
       var dayFiveHumidity =  document.getElementById("dayFiveHumidity");
 
       dayFiveDate.innerHTML = moment().add(5, 'days').format('M/DD/YYYY');
       dayFiveIcon.innerHTML = " <img type=png src=" + json.list[5].weather[0].icon +">";
       dayFiveTemp.innerHTML = "Temp: " + json.list[5].main.temp + " °F";
       dayFiveHumidity.innerHTML = "Humidity: " + json.list[5].main.humidity + "%";
    });

  
  

  

    //event listener for button includes display and local storage

    //capture input to local storage + persist