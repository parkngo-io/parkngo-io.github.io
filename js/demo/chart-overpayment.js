// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("overpayment");
var myPieChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [{
      data: [896, 384, 404, 350, 221, 362, 353, 96, 81, 75],
      backgroundColor: palette('tol-dv', 10).map(i => '#' + i)
    }],
  },
  legend: {
    display: true
  }
});
