// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("annual-search-cost");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [{
      data: [4300, 3700, 655, 329, 490, 1300, 262, 251, 726, 209],
      backgroundColor: palette('tol-dv', 10).map(i => '#' + i)
    }],
  },
  legend: {
    display: true
  }
});
