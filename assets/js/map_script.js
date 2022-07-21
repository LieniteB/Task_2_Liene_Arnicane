//google maps
styles = [{
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
},
{
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
},
{
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
},
{
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
},
{
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
},
{
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
},
{
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
},
{
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
},
{
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
},
{
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
},
{
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
},
{
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
},
{
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
},
{
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
},
{
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
},
{
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
},
{
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
},
{
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
},]


function initMap(){
var options = {
    zoom:13,
    center: {lat:56.9496, lng:24.1052},
    styles: styles,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
}
var options2 = {
    zoom:14,
    center:{lat:56.6511, lng:23.7214},
    styles: styles,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
}
var options3 = {
    zoom:15,
    center:{lat:56.8162, lng:24.6140},
    styles: styles,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
}

var map = new google.maps.Map(document.getElementById("map"), options);
var map2 = new google.maps.Map(document.getElementById("map-2"), options2);
var map3 = new google.maps.Map(document.getElementById("map-3"), options3);


addMarker({
    coords:{lat:56.96578807365938, lng:24.140575215341684}, 
    content:"<div class='infoWindow'><img src='../assets/img/auch.png'></img> <div><h3>AUCH beauty home</h3><p class='text2'>+371 28361686, +371 23202079<br> auchbeauty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>",
    category: "skaistumkopsana",
    });
addMarker({
    coords:{lat: 56.95652050993442,  lng:24.119182791628553}, 
    content:"<div class='infoWindow'><img src='../assets/img/bagels.png'></img> <div><h3>Big Bad Bagels</h3><p class='text2'>+371 24556585 <br> bbb@bigbadbagels.com<br>Baznīcas iela 8, Rīga</p></div></div>",
    category: "edinasana",
});
addMarker({
    coords:{lat: 56.9515797144434, lng:24.120647277430894}, 
    content: "<div class='infoWindow'><img src='../assets/img/kurts.jpg'></img> <div><h3>Kurts coffee</h3><p class='text2'>+371 23202079 <br> kurtscoffee.riga@gmail.com<br>Tērbates iela 2J, Rīga</p></div></div>",
    category:"edinasana",
});
addMarker({
    coords:{lat: 56.95817247355672,lng:24.191016421975043}, 
    content:"<div class='infoWindow'><img src='../assets/img/purch.jpg'></img> <div><h3>Purch restaurant</h3><p class='text2'>+371 20200400<br>Dzelzavas iela 51A, Rīga</p></div></div>",
    category: "edinasana",
});
addMarker({
    coords:{lat: 56.958998119109765,lng:24.119677850834346}, 
    content:"<div class='infoWindow'><img src='../assets/img/grieze.png'></img> <div><h3>Grieze</h3><p class='text2'>+371 20015220<br> grieze@grieze.lv<br>Ģertrūdes iela 2 - k2, Rīga</p></div></div>",
    category: "skaistumkopsana",
});


function addMarker(props){
var marker = new google.maps.Marker({
    position:props.coords,
    map:map,
    icon: href="../assets/img/marker.png"
});

var infoWindow = new google.maps.InfoWindow({
    content:props.content,

});

marker.addListener("click", function(){
    infoWindow.open(map, marker);
})
}
}

var riga = document.getElementById("riga");
var jelgava = document.getElementById("jelgava");
var ogre = document.getElementById("ogre");

var city = document.getElementById("map");
var city2 = document.getElementById("map-2");
var city3 = document.getElementById("map-3");
riga.onclick = function(){

city.classList.remove("hide")
city2.classList.add("hide")
city3.classList.add("hide")

document.querySelector(".dropbtn").innerText = "Rīga";
document.querySelector(".dropbtn").style.fontWeight = "bold";

}
jelgava.onclick = function(){

city2.classList.remove("hide");
city.classList.add("hide")
city3.classList.add("hide")

document.querySelector(".dropbtn").innerText = "Jelgava";
document.querySelector(".dropbtn").style.fontWeight = "bold";
}
ogre.onclick = function(){


city.classList.add("hide")
city2.classList.add("hide")
city3.classList.remove("hide");

document.querySelector(".dropbtn").innerText = "Ogre";
document.querySelector(".dropbtn").style.fontWeight = "bold";
}


