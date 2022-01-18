var xValues= ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
let myChart = document.getElementById('myChart').getContext('2d');

let covidStatsChart = new Chart(myChart, {
    type:'line',
    data: {
        labels: xValues,
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
            borderColor: '#0000FF',
            fill: false
        },{
            label:'Canada' ,
            data:[
                874087,
                272634,
                473839,
                1475638,
                35353,
                633453,
                1345345,
                1635454,
                874087,
                353,
                353456,
                353674
            ],
                backgroundColor:'#000',
                borderColor: '#FF0000',
                fill: false

        }]
        },
        options:{
            legend: {display: true}
        }
    
});