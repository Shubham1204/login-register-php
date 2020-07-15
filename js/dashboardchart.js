var ctx = document.getElementById('orderschart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['New', 'Shipped','Delivered','Cancelled'],
        datasets: [{
            label: 'My First dataset',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderWidth: 0,
            backgroundColor: [
                // red,blue,green,pink
                        '#3eb579',
                        '#49cd8b',
                        "#54e69d",
                        "#71e9ad"
                    ],
                    hoverBackgroundColor: [
                        '#3eb579',
                        '#49cd8b',
                        "#54e69d",
                        "#71e9ad"
                    ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [<?php echo"$productcount"?>,<?php echo"$shippedorder"?>,<?php echo"$deliveredorder"?>,<?php echo"$cancelcount"?>]
        }]
    },

    // Configuration options go here
    options: {}
});