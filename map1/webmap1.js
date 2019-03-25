let mapView = L.map('mapView').setView([30.18, -90.14], 4)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}').addTo(mapView)
let Louisiana = L.marker([30, -90]).addTo(mapView)
let Baton Rouge = L.polygon([
  [30.509, -90.08],
  [30.503, -90.06],
  [30.51, -90.047]
]).addTo(mapView);
Louisiana.bindPopup('A polygon')
Baton Rouge.bindPopup('A marker')
