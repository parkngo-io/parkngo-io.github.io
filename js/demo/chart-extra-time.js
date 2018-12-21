// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("extra-time");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["US", "New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [
      { type: 'line',
      fill: false,
      lineTension: 0,
      label: "parking tickets/year",
      backgroundColor: "rgb(60, 83, 161)",
      borderColor: "rgb(60, 83, 161)",
      yAxisID: 'B',
      data: [0.2, 1.31, 1.05, 0.89, 0.81, 0.45, 0.72, 0.71, 0.58, 0.54, 0.35],
    },
      {
      label: "extra time (hours)",
      backgroundColor: palette('tol-dv', 11).map(i => '#' + i).reverse(),
      yAxisID: 'A',
      data: [13, 96, 70, 68, 59, 46, 43, 40, 35, 30, 22],
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
        id: 'A',
        scaleLabel: {
          display: true,
          labelString: 'extra time (hours)'
        },
        position: 'left',
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      },
      { id: 'B',
      scaleLabel: {
        display: true,
        labelString: 'no. of tickets'
      },
      position: 'right',
        ticks: {
          min: 0,
          max: 1.5,
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
