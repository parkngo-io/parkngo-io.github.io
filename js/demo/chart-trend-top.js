// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("trend-top");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: [["Need for curb management strategies"],
    ["Prevalence of mobile applications"], 
    ["Technologies to improve access control and payment"], 
    ["Demand for guidance systems to help drivers find parking"], 
    ["Collaboration between parking, transportation,",
    "and decision makers"],
    ["Need to accommodate electric vehicles/charging stations"], 
    ["Demand for electronic (cashless) payment"], 
    ["Anticipating the effects of autonomous vehicles"], 
    ["Pressure to maintain existing parking revenues",
    " in the face of mobility and transportation options"], 
    ["Shared use of parking facilities by different users"]],
    datasets: [
      { 
      lineTension: 0,
      label: "%",
      data: [52, 49, 46, 43, 41, 39, 38, 30, 26, 25],
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
