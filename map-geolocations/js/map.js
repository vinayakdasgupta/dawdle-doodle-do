var map = L.map('mapdiv', {
    center: [31.505, -13],
    zoom: 3,
    scrollWheelZoom: false
});

var basemap =  L.tileLayer('http://c.tile.openstreetmap.org/{z}/{x}/{y}.png');
basemap.addTo(map);

var csv_options = {
    fieldSeparator: ',',
    titles: ['lng', 'lat', 'popup'],
    onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.popup);
    }
};
var csvContents = document.getElementById('locations').innerHTML;
var geoLayer = L.geoCsv(csvContents, csv_options);
map.addLayer(geoLayer)
    