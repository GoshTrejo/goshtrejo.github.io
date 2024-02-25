var ipAddress = document.querySelector(".search").innerHTML;
var apiKey = "https://api.ipgeolocation.io/ipgeo?apiKey=ace203e6b7c5457cafd60870b7d3826d&ip="+ipAddress;


function IpGeoLocation(){
    fetch(apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector(".ipaddress").innerHTML = data.ip;
        document.querySelector(".country").innerHTML = data.country_name;
        document.querySelector(".city").innerHTML =  data.city;
        document.querySelector(".latitude").innerHTML = data.latitude;
        document.querySelector(".longitude").innerHTML = data.longitude;
        document.querySelector(".int-provider").innerHTML = data.isp;
    })
}