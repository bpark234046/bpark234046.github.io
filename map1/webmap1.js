let New_York = L.map('webmap').setView([40.7, -74], 12)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(New_York)
let  = L.marker([30.4133, -91.1800]).addTo(New_York)
let New_York_City = L.polygon([
[40.7041815, -74.024737],
[40.696181, -74.008645],
[40.710912, -74.959175],
[40.765809, -73.930903],
[40.802319, -73.920794],
[40.835581, -73.912190],
[40.842660, -73.949586], 
[40.787977, -73.987706],
[40.739980, -74.016945],
[40.706497, -74.023876]
]).addTo(New_York);
var latlngs = [
[30.53, -91.2],
[30.67, -91.43],
[30.04, -91.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(New_York);
New_York_City.bindPopup('A polygon');
Empire_State_Building.bindPopup('A marker');
polyline.bindPopup('A polyline');
