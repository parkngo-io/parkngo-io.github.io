// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("trend-sustainable");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: [["Guidance systems that enable drivers to find parking" , "faster, reducing carbon emissions"],
    ["Energy efficient lighting"], 
    ["Encouraging alternative modes of travel through availability",
    "of bike storage, car share/bike share access to traffic, etc."], 
    ["Automating payment processing"], 
    ["Installing renewable energy technology (solar, wind)"], 
    ["Certification standards for sustainable garages"], 
    ["Solar panels"], 
    ["Permeable pavements/surfaces"], 
    ["Increasing the number of electric vehicle (EV) charging stations"], 
    ["Innovative water/stormwater management systems"]],
    datasets: [
      { 
      lineTension: 0,
      label: "%",
      data: [46, 46, 45, 24, 21, 18, 18, 14, 13, 13],
      backgroundColor: palette('tol-dv', 10).map(i => '#' + i).reverse(),
    }
  ],
  },
  options: {
    scales: {
      yAxes: [{
        time: {
          unit: 'percentage'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      xAxes: [
        {
        scaleLabel: {
          display: true,
          labelString: 'percentage'
        },
        ticks: {
          min: 0,
          max: 50,
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
