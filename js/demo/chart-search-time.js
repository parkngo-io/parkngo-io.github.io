// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("search-time");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["US", "New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [
      {
        label: "Annual search time (hours)",
        yAxisID: 'B',
        type: "line",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgb(170, 28, 59)",
        borderColor: "rgb(170, 28, 59)",
        pointRadius: 5,
        pointBackgroundColor: "rgb(170, 28, 59)",
        pointBorderColor: "rgb(170, 28, 59)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(170, 28, 59)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [17, 107, 85, 83, 65, 58, 56, 53, 50, 48, 35],
      },
      {
      label: "On Street search (mins)",
      yAxisID: 'A',
      lineTension: 0.3,
      backgroundColor: "rgb(64, 140, 203)",
      borderColor: "rgb(64, 140, 203)",
      pointRadius: 5,
      pointBackgroundColor: "rgb(64, 140, 203)",
      pointBorderColor: "rgb(64, 140, 203)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(64, 140, 203)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [2, 15, 12, 12, 10, 9, 9, 8, 8, 8, 6],
    },
    {
      label: "Off Street search (mins)",
      yAxisID: 'A',
      lineTension: 0.3,
      backgroundColor: "rgb(234, 148, 97)",
      borderColor: "rgb(234, 148, 97)",
      pointRadius: 5,
      pointBackgroundColor: "rgb(234, 148, 97)",
      pointBorderColor: "rgb(234, 148, 97)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(234, 148, 97)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [2, 13, 11, 11, 9, 8, 8, 8, 8, 8, 6],
    }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        stacked: false,
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        id: 'A',
        scaleLabel: {
          display: true,
          labelString: 'minutes per trip'
        },
        position:'left',
        stacked: true,
        ticks: {
          min: 0,
          max: 30,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      },
      { id: 'B',
      scaleLabel: {
        display: true,
        labelString: 'annual search hours'
      },
      position:'right',
        stacked: true,
        ticks: {
          min: 0,
          max: 110,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
