let map = L.map('mapView').setView([30.18, -90.14], 4)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mapView);
let marker = L.marker([30, -90]).addTo(mapView)
let polygon = L.polygon([
  [30.509, -90.08],
  [30.503, -90.06],
  [30.51, -90.047]
]).addTo(mapView);
Louisiana.bindPopup('A polygon')
Baton Rouge.bindPopup('A marker')
