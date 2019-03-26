let New_York = L.map('webmap').setView([40.7, -74], 8)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(Louisiana)
let  = L.marker([30.4133, -91.1800]).addTo(Louisiana)
let New_York_City = L.polygon([
[40.71455, -74.00712],
[40.72, -74.01],
[40.71, -74.05],
[40.81, -74.09],
[40.65, -74.15],
[40.7, -74]
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
