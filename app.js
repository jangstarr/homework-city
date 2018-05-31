var cities = ['Choose a city...', 'NYC', 'SF', 'LA', 'ATX', 'SYD']

$(document).ready(function(){

// display cities in dropdown
  for (var i = 0; i < cities.length; i++) {
    var option = $('<option>', {
      value: cities[i],
      text: cities[i]
      });
    $('#city-type').append(option);
    };

// change the background image based on city
  $('#city-type').on('change', function(){
      var city = $('#city-type').val();


      if(city === 'NYC') {

        $('body').css('background-image', 'url(nyc.jpg)');

      } else if(city === 'SF') {

        $('body').css('background-image', 'url(sf.jpg)');

      } else if(city === 'LA') {

        $('body').css('background-image', 'url(la.jpg)');

      } else if(city === 'ATX') {

        $('body').css('background-image', 'url(austin.jpg)');

      } else if(city === 'SYD') {

        $('body').css('background-image', 'url(sydney.jpg)');

      } else {

        $('body').css('background-image', 'url(citipix_skyline.jpg)');

      }

    });

});
