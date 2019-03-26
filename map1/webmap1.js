let New_York = L.map('webmap').setView([40.705, -74], 11)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(New_York)
let Empire_State_Building  = L.marker([40.748415, -73.985678]).addTo(New_York)
let New_York_City = L.polygon([
  [40.7041815, -74.024737],
  [40.696181, -74.008645],
  [40.720370, -73.966617],
  [40.765809, -73.930903],
  [40.802319, -73.920794],
  [40.835581, -73.912190],
  [40.842660, -73.949586], 
  [40.787977, -73.987706],
  [40.739980, -74.016945],
  [40.706497, -74.023876]
  ]).addTo(New_York);
var latlngs = [
  [40.758577, -73.985075],
  [40.757527, -73.985879],
  [40.756443, -73.986645],
  [40.754467, -73.988070],
  [40.752018, -73.989865],
  [40.748065, -73.992783]
  ];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(New_York);
New_York_City.bindPopup('New York City');
Empire_State_Building.bindPopup('Empire State Building');
polyline.bindPopup('7th Avenue');
