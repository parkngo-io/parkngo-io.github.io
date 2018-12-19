// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("search-time-cost");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["US", "New York", "Los Angeles", "San Francisco", "Washington D.C", "Seattle", "Chicago", "Boston", "Atlanta", "Dallas", "Detroit"],
    datasets: [
      {
      label: "Annual search time (hours)",
      backgroundColor: "rgb(234, 148, 97)",
      borderColor: "rgb(234, 148, 97)",
      yAxisID: 'A',
      data: [17, 107, 85, 83, 65, 58, 56, 53, 50, 48, 35],
    },
    {
      label: "Annual search cost ($)",
      backgroundColor: "rgb(64, 140, 203)",
      borderColor: "rgb(64, 140, 203)",
      yAxisID: 'B',
      data: [345, 2243, 1785, 1735, 1367, 1205, 1174, 1111, 1043, 995, 731],
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
          labelString: 'time (hours)'
        },
        position: 'left',
        ticks: {
          min: 0,
          max: 120,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      },
      { id: 'B',
      scaleLabel: {
        display: true,
        labelString: 'cost ($)'
      },
      position: 'right',
        ticks: {
          min: 0,
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
