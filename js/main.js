// Patent slider animation

var slider = document.querySelector('.patent-ticker');
var isDown = false;
var startX;
var scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 2; //scroll-medium
  slider.scrollLeft = scrollLeft - walk;
});

// Map

var mymap = L.map('map').setView([51.505, -0.09], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiemVyb3RleCIsImEiOiJja2h1cjV0bWEwYjY4MnludDBvcW9tbGczIn0.6e6QRfpRFrw8Kjune3vdJA'
}).addTo(mymap);

var markerOne = L.marker([51.5, -0.09]).addTo(mymap);
markerOne.bindPopup("<b>Patent Name</b><br>Information on a patent here.").openPopup();
var markerTwo = L.marker([51.9, -0.18]).addTo(mymap);
markerTwo.bindPopup("<b>Patent Name</b><br>Information on a patent here.").openPopup();
var markerThree = L.marker([51.8, -0.32]).addTo(mymap);
markerThree.bindPopup("<b>Patent Name</b><br>Information on a patent here.").openPopup();
var markerFour = L.marker([51.6, -0.64]).addTo(mymap);
markerFour.bindPopup("<b>Patent Name</b><br>Information on a patent here.").openPopup();
var markerFive = L.marker([51.5, -0.92]).addTo(mymap);
markerFive.bindPopup("<b>Patent Name</b><br>Information on a patent here.").openPopup();
