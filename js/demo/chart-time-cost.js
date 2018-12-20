// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("search-time-cost");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [
      {
        type: 'line',
        fill: false,
        lineTension: 0,
        label: "2 hr parking cost ($)",
        backgroundColor: "rgb(170, 28, 59)",
        borderColor: "rgb(170, 28, 59)",

        data: [33, 14, 12, 18, 10, 22, 26, 6, 6, 9],
      },
      { 
      label: "Annual search cost ($)",
      backgroundColor: "rgb(64, 140, 203)",
      borderColor: "rgb(64, 140, 203)",
      data: [2243, 1785, 1735, 1367, 1205, 1174, 1111, 1043, 995, 731],
    }


  ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [
      { 
        type: "logarithmic",
      scaleLabel: {
        display: true,
        labelString: 'cost ($)'
      },
      position: 'left',
        ticks: {
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
