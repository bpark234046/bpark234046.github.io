let states = L.map('webmap3').setView([37.5, -95], 4.0);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(states);
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson';
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
    let popu = feature.properties.POPULATION;
    let stateColor = 'red';
    if ( popu >= '5555555' ) { stateColor = 'blue' }
    return {
      stroke: true,
      color: stateColor,
      weight: 1,
      fillOpacity: 0.2
  };
};
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME;
  let pop10 = feature.properties.POP2010;
  let popu = feature.properties.POPULATION;
  layer.bindPopup('Total population of ' + name + ' ' + 'is' + ': ' + popu + '<br>Population in 2010 was: ' + pop10 + ' ' )
};
  let stateGeojsonOptions = {
    style: stateStyle,
    onEachFeature: onEachFeature
  };
  L.geoJSON(data, stateGeojsonOptions).addTo(states);

});
