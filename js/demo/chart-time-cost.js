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
        yAxisID:'A',
        label: "2 hr parking cost ($)",
        backgroundColor: "rgb(60, 83, 161)",
        borderColor: "rgb(60, 83, 161)",

        data: [33, 14, 12, 18, 10, 22, 26, 6, 6, 9],
      },
      { 
        yAxisID:'B',
      label: "Annual search cost ($)",
      backgroundColor: palette('tol-dv', 10).map(i => '#' + i).reverse(),
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
      { id:'A',
        type: "linear",
      scaleLabel: {
        display: true,
        labelString: 'parking cost ($)'
      },
      position: 'left',
        ticks: {
          max: 35,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      },
      { id:'B',
      type: "linear",
    scaleLabel: {
      display: true,
      labelString: 'search cost ($)'
    },
    position: 'right',
      ticks: {
        max: 2500,
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
