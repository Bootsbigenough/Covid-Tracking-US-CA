// Get Covid data from RapidAPIgi
var getUSAData = function() {
    //fetch USA Covid Data from Api
    fetch("https://covid-193.p.rapidapi.com/statistics?country=USA", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "14561f5a37msh441b09bdd5e7becp1db944jsn9f5336dd9806"
        }
    })
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data)
                })
            } else {
                console.log('Error >>> ', response.statusText)
            }
        })
            .catch(err => {
            console.error(err);
        });
    };
var getCanadaData = function() {
     //fetch Canada Covid data from Api
    fetch("https://covid-193.p.rapidapi.com/statistics?country=Canada", {
         "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "14561f5a37msh441b09bdd5e7becp1db944jsn9f5336dd9806"
            }
        })
        .then(function(response) {
              if (response.ok) {
                response.json().then(function(data) {
                    console.log(data)
                 })
            } else {
                console.log('Error >>> ', response.statusText)
            }
        })
             .catch(err => {
            console.error(err);
        });
    };
var getUSAHistory = function() {
    //Fetch USA Historical Data from API
    fetch("https://covid-193.p.rapidapi.com/history?country=usa", {
    	"method": "GET",
	    "headers": {
		    "x-rapidapi-host": "covid-193.p.rapidapi.com",
		    "x-rapidapi-key": "14561f5a37msh441b09bdd5e7becp1db944jsn9f5336dd9806"
	        }
        })
        .then(function(response) {
            if (response.ok) {
              response.json().then(function(data) {
                  console.log(data)
               })
          } else {
              console.log('Error >>> ', response.statusText)
          }
      })
           .catch(err => {
          console.error(err);
      });
  };
  var getCanadaHistory = function() {
    //Fetch Canada's Historical Data from API
    fetch("https://covid-193.p.rapidapi.com/history?country=Canada", {
    	"method": "GET",
	    "headers": {
		    "x-rapidapi-host": "covid-193.p.rapidapi.com",
		    "x-rapidapi-key": "14561f5a37msh441b09bdd5e7becp1db944jsn9f5336dd9806"
	        }
        })
        .then(function(response) {
            if (response.ok) {
              response.json().then(function(data) {
                  console.log(data)
               })
          } else {
              console.log('Error >>> ', response.statusText)
          }
      })
           .catch(err => {
          console.error(err);
      });
  };



    // mobile menu
    const burgerIcon = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#nav-links');
    
    burgerIcon.addEventListener('click' , () => {
        navbarMenu.classList.toggle('is-active');
    })
    
    getUSAData()
    getCanadaData()
    getUSAHistory()
    getCanadaHistory()