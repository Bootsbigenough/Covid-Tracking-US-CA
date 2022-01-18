
// Get Covid data from UNStats
var getCovidData = function() {
    var apiCovidUrl = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json";

    fetch(apiCovidUrl).then(function(response) {
        // console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// Get Canada Covid data
var getCanadaCovidData = function() {
    var apiVacUrl = "https://api.covid19tracker.ca/summary";

    fetch(apiVacUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
})

getCovidData();
// getCanadaCovidData();
