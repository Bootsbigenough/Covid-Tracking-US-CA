let myChart = document.getElementById('myChart').getContext('2d');

let covidStatsChart = new Chart(myChart, {
    type:'line',
    data:{
        labels:['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'] ,
        datasets:[{
            label:'United States' ,
            data:[
                6085771,
                2342524,
                1796900,
                1844088,
                896900,
                392176,
                1378465,
                4246733,
                4101460,
                2432071,
                25517088,
                6349705
            ],
            backgroundColor:'#000',
            borderColor: '#00d1b2',
        }]
        },
        options:{}
    
});