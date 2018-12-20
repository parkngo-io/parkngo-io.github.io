// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("money-parkopedia");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["New York City", "Chicago", "Boston", "Philadelphia", "Washington D.C.", 
    "Minneapolis", "Los Angeles", "Cleveland", "Detroit", "Denver", 
    "Miami", "Newark", "San Diego", "Seattle", "San Francisco", 
            "Baltimore", "Bellevue", "Charlotte", "Pittsburgh", "Atlanta", 
            "Dallas", "Houston", "Indianapolis", "Nashville", "New Orleans", 
            "Tampa", "Portland", "Columbus", "Cincinnati", "Fort Lauderdale", 
            "Milwaukee", "Richmond", "Sacramento", "Fort Worth", "Kansas City", 
            "Boise", "Louisville", "Orlando", "Raleigh", "St. Louis"],
    datasets: [
      { 
        lineTension: 0,
        label: "monthly rate",
        data: [616, 265, 425, 284.50, 274,
          260, 190, 190, 150, 205, 
          135, 195, 187.50, 289, 322.50, 
          186.50, 222, 160, 235, 105,
        135, 195, 137.50, 175, 172, 
        127, 215, 160, 175, 106, 
        115, 105, 170, 135, 95, 
        120, 95, 110, 110, 85],
        backgroundColor: palette('tol-dv', 40).map(i => '#' + i).reverse(),
        },
      { 
        lineTension: 0,
        label: "daily rate",
        data: [42.25, 30, 34, 25, 21,
          23, 16, 10.5, 20, 17, 
          25, 15, 17, 24, 28, 
          15, 24, 21, 18, 14,
        15, 15.50, 17.50, 20, 12, 
        12, 13.62, 10, 12, 16, 
        12, 14, 15, 12, 12, 
        12, 10, 15, 12, 16],
        backgroundColor: palette('tol-dv', 40).map(i => '#' + i).reverse(),
        },
      { 
      lineTension: 0,
      label: "hourly rate",
      data: [27, 17, 16, 12, 11, 10, 9.5, 9, 9, 8, 8, 8, 8, 8, 7.25, 7, 7, 7, 7,
      6, 6, 6, 6, 6, 6, 6, 5, 4.5, 4, 4, 4, 4, 4, 3.5, 3, 2.5 , 2, 2, 2, 2],
      backgroundColor: palette('tol-dv', 40).map(i => '#' + i).reverse(),
      }
  ],
  },
  options: {
    scales: {
      yAxes: [{
        time: {
          unit: 'cost'
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [
        {
        scaleLabel: {
          display: true,
          labelString: 'cost ($)'
        },
        type: "logarithmic",
        ticks: {
          min: 0,
          max: 650,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
