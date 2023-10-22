const airtemp = document.querySelector('#input-air-temp');
const button = document.querySelector('#wind-chill');
const wspeed = document.querySelector('#input-wind-speed');
const result = document.querySelector('#windchill-result');

button.addEventListener('click', function() {

    if (airtemp.value <= 50 && wspeed.value > 3 ) {

        calculation = (35.74 + (0.6215*airtemp.value) - 35.75*(wspeed^0.16) + (0.4275*airtemp.value)*(wspeed^0.16))

        result.textContent = 'Wind Chill Index = ' + calculation.toFixed(2) + " °F";

    }
    else{

        result.textContent = 'N/A - Temperature <= 50°F and Wind Speed > 3 mph';
    }

});