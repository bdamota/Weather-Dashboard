

//var submit = document.getElementById("submit").addEventListener("click", function() {
//var city = document.getElementById("city").value;

fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=san+diego&units=imperial&appid=1506e7234cdde16a04f0552631be2b2d'
  )
    // Converts the response to JSON
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      //Use 'querySelector' to get the ID of where elements will be displayed
      var name = document.getElementById("name");
      var date = document.getElementById("date");
      var temp = document.getElementById("temp");
      var humidity = document.getElementById("humidity");
      var wind = document.getElementById("wind");
      var UV = document.getElementById("UV");


  
       name.innerHTML = json.city.name; //+ //date + //icon   
       temp.innerHTML = "Temperature: " + json.list[0].main.temp + " °F";
       humidity.innerHTML = "Humidity: " + json.list[0].main.humidity + "%";
       wind.innerHTML = "Wind Speed: " + json.list[0].wind.speed + " MPH"; 
       UV.innerHTML = "UV Index: " //json.main.humidity;    
    });
//})
  
  

  

    //event listener for button includes display and local storage

    //capture input to local storage + persist