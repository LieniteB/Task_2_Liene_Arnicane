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


var gmarkers1 = [];
var markers1 = [];


markers1 = [
    ['0', "<div class='infoWindow'><img src='../assets/img/auch.png'></img> <div><h3>AUCH beauty home</h3><p class='text2'>+371 28361686, +371 23202079<br> auchbeauty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>", 56.96578807365938, 24.140575215341684, 'skaistumkopsana'],
    ['1', "<div class='infoWindow'><img src='../assets/img/bagels.png'></img> <div><h3>Big Bad Bagels</h3><p class='text2'>+371 24556585 <br> bbb@bigbadbagels.com<br>Baznīcas iela 8, Rīga</p></div></div>", 56.95652050993442, 24.119182791628553, 'edinasana'],
    ['2', "<div class='infoWindow'><img src='../assets/img/kurts.jpg'></img> <div><h3>Kurts coffee</h3><p class='text2'>+371 23202079 <br> kurtscoffee.riga@gmail.com<br>Tērbates iela 2J, Rīga</p></div></div>", 56.9515797144434, 24.120647277430894, 'edinasana'],
    ['3', "<div class='infoWindow'><img src='../assets/img/purch.jpg'></img> <div><h3>Purch restaurant</h3><p class='text2'>+371 20200400<br>Dzelzavas iela 51A, Rīga</p></div></div>", 56.95817247355672, 24.191016421975043, 'edinasana'],
    ['4', "<div class='infoWindow'><img src='../assets/img/grieze.png'></img> <div><h3>Grieze</h3><p class='text2'>+371 20015220<br> grieze@grieze.lv<br>Ģertrūdes iela 2 - k2, Rīga</p></div></div>", 56.958998119109765, 24.119677850834346, 'skaistumkopsana'],
];

function initMap() {
    var center = new google.maps.LatLng(56.9496, 24.1052);
    var mapOptions = {
        zoom: 12,
        center: center,
        styles:styles,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    
    

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map-2"), options2);
    var map3 = new google.maps.Map(document.getElementById("map-3"), options3);

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i])
        
    }
}

// /**
//  * Function to add marker to map
//  */

function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var infowindow = new google.maps.InfoWindow({
        content: ''
        });
    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: href="./assets/img/marker.png",
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
        }
    })(marker1, content));
}
filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}
initMap();
