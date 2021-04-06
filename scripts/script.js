
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuc2NodWl0ZSIsImEiOiJja21scHhyMm4wZmoxMndyenp4dzk3NXJ5In0.yHoaDOUi89eSe4_ywFdZ0w';





var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-74.5, 40],
zoom: 10
});
 

document.getElementById('fly').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
 -80.54293008014656, 28.486030753336856
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
});

document.getElementById('fly2').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
  4.4398832,51.9555086
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
});

document.getElementById('fly3').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
  37.408831698,55.970329452
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
});



var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-80.54293008014656, 28.486030753336856]
},
'properties': {
'title': 'Cape Canaveral Space Force Station',
'description': 'Washington, D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [4.4398832,51.9555086]
},
'properties': {
'title': 'Rotterdam The Hague Airport',
'description': 'San Francisco, California'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [37.408831698,55.970329452]
},
'properties': {
'title': 'Sheremetyevo International Airport | Moscow',
'description': 'San Francisco, California'
}
}
]
};


// add markers to map
geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
 
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
'<h3>' +
marker.properties.title +
'</h3><p>' +
marker.properties.description +
'</p>'
)
)
.addTo(map);
});

function getNasaData(){
    var spaceData = "http://api.open-notify.org/astros.json";

    fetch(spaceData)

    .then(function(response){
      return response.json(); 
    })

     .then(function(response){
      console.log(response); 
      showNasaData(response);
    })

}
getNasaData();

function showNasaData(response){

  var numberPeople = response.number;

  var nameBox = document.getElementById('names');
  nameBox.innerHTML = '<h2>' + 'Number of people in space: ' + '</h2>' + '<br>' + '<b>' + numberPeople + '</b>';
}




function getAPIdata(city) {

  var url = 'https://api.openweathermap.org/data/2.5/weather';
  var apiKey ='fadb4512efaebccb65475d1c8d68fff6';
  var request = "http://api.open-notify.org/astros.json";

  // construct request
  var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
  
  // get current weather
  fetch(request)
  
  // parse to JSON format
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // render weatherCondition
    onAPISucces(response);  
  })
  
}


function onAPISucces(response) {
  // get type of weather in string format
  var type = response.weather[0].description;

  // get temperature in Celcius
  var degC = Math.floor(response.main.temp - 273.15);
  var windSpeed = response.wind.speed;
  var windDeg = response.wind.deg;
  var visibility = response.visibility;

  // render weather in DOM
  var weatherBox = document.getElementById('weather');
  weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var CapeCanaveral = getAPIdata('Cape%20Canaveral');


// init data stream
getAPIdata();


function getAPIdata2(city) {

  var url = 'https://api.openweathermap.org/data/2.5/weather';
  var apiKey ='fadb4512efaebccb65475d1c8d68fff6';

  // construct request
  var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
  
  // get current weather
  fetch(request)
  
  // parse to JSON format
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // render weatherCondition
    onAPISucces2(response);  
  })
  
}


function onAPISucces2(response) {
  // get type of weather in string format
  var type = response.weather[0].description;

  // get temperature in Celcius
  var degC = Math.floor(response.main.temp - 273.15);
  var windSpeed = response.wind.speed;
  var windDeg = response.wind.deg;
  var visibility = response.visibility;

  // render weather in DOM
  var weatherBox = document.getElementById('weather2');
  weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var CapeCanaveral = getAPIdata2('rotterdam');


// init data stream
getAPIdata2();

function getAPIdata3(city) {

  var url = 'https://api.openweathermap.org/data/2.5/weather';
  var apiKey ='fadb4512efaebccb65475d1c8d68fff6';

  // construct request
  var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
  
  // get current weather
  fetch(request)
  
  // parse to JSON format
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // render weatherCondition
    onAPISucces3(response);  
  })
  
}


function onAPISucces3(response) {
  // get type of weather in string format
  var type = response.weather[0].description;

  // get temperature in Celcius
  var degC = Math.floor(response.main.temp - 273.15);
  var windSpeed = response.wind.speed;
  var windDeg = response.wind.deg;
  var visibility = response.visibility;

  // render weather in DOM
  var weatherBox = document.getElementById('weather3');
  weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var Moscow = getAPIdata3('Moscow');


// init data stream
getAPIdata3();

