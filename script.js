fetch(
    'https://api.openweathermap.org/data/2.5/forecast?zip=90039&appid=1506e7234cdde16a04f0552631be2b2d'
  )
    // Converts the response to JSON
    .then(function(response) {
      return response.json();
      console.log(response)
    })
    .then(function(json) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      //console.log(json.data.image_original_url);
      //var container = document.getElementById("response-container");
  
      //container.innerHTML = "<img src="+json.data.image_original_url+">";
  
      
    });

    //API KEY
    //b47f8e3eb51a1e96babe844e69241c4c