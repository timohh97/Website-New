function drawChartParam(numbers,param) {
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: numbers,
            datasets: [{
                label: "NUMBERS",
                data: numbers,
                backgroundColor: "red",
                borderColor: "lime",
                borderWidth: 5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }, animation: { duration: param, easing: 'linear' }
        }
    });

    return myChart
}