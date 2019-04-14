function init () {
  let New_Orleans = L.map('basemap').setView([29.94, -90.09], 13)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(New_Orleans);
  // let neworleansmetersUrl = 'https://opendata.arcgis.com/datasets/0d1f580026af4fc39f43f1c60fc1adb1_0.geojson';
jQuery.getJSON("https://opendata.arcgis.com/datasets/0d1f580026af4fc39f43f1c60fc1adb1_0.geojson", function (data) {
  L.geoJson(data).addTo(New_Orleans);
});

  let area = L.polygon([
    [29.937731, -90.059669],
    [29.937804, -90.064697],
    [29.943726, -90.076465],
    [29.949006, -90.084742],
    [29.954259, -90.087241],
    [29.959336, -90.088861],
    [29.961916, -90.078740],
    [29.966119, -90.068222],
    [29.969315, -90.059906],
    [29.969689, -90.050626],
    [29.969057, -90.043663],
    [29.962039, -90.050906],
    [29.954868, -90.059883],
    [29.937760, -90.058199]

  ]).addTo(New_Orleans)
  area.bindPopup('The majority of metered parking in New Orleans is located here.')

}
window.addEventListener('load', init)
