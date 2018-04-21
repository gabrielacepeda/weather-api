
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "";

  getWeather('washington', 'usa');

  $('#getTemp').on('click', function(e) {
    console.log(e);
    getWeather($('#city').val(), $('#country').val());
  });

  function getWeather(zebra, pencil) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" +zebra+ "," +pencil+ "&appid=" + apiKey,
        // Work with the response
        success: function( response ) {
            console.log(response);
            console.log("TEMP EQUALS: "+response.main.temp);
            updateUISuccess(response.main.temp, zebra, pencil);
        },

        error: function(er) {
          console.log(er)
        }
    });
  }

  function updateUISuccess(temp, city, state) {
    $('#city, #state').val('');
    $('#location').html(city + ', ' + state);
    console.log(temp);
    $('#temp').html(1.8* (temp - 273) + 32);
  }

  function updateUIError() {
    alert("There was an error getting weather data :(");
  }
