// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("ticket-cost");
var myPieChart = new Chart(ctx, {
  type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["New York"],
          backgroundColor: "rgba(170, 28, 59, 0.2)",
          borderColor: "rgba(170, 28, 59, 1)",
          data: [{
            x: 1.31,
            y: 85,
            r: 33
          }]
        }, {
          label: ["Los Angeles"],
          backgroundColor: "rgba(215, 84, 72,0.2)",
          borderColor: "rgba(215, 84, 72,1)",
          data: [{
            x: 1.05,
            y: 71,
            r: 14
          }]
        }, {
          label: ["San Francisco"],
          backgroundColor: "rgba(234, 148, 97,0.2)",
          borderColor: "rgba(234, 148, 97,1)",
          data: [{
            x: 0.89,
            y: 64,
            r: 12
          }]
        }, {
          label: ["Washington D.C"],
          backgroundColor: "rgba(248, 204, 137,0.2)",
          borderColor: "rgba(248, 204, 137,1)",
          data: [{
            x: 0.81,
            y: 41,
            r: 18
          }]
        }, {
          label: ["Seattle"],
          backgroundColor: "rgba(254, 240, 191,0.2)",
          borderColor: "rgba(254, 240, 191,1)",
          data: [{
            x: 0.45,
            y: 20,
            r: 10
          }]
        }, {
          label: ["Boston"],
          backgroundColor: "rgba(241, 249, 237,0.2)",
          borderColor: "rgba(241, 249, 237,1)",
          data: [{
            x: 0.72,
            y: 18,
            r: 26
          }]
        },{
          label: ["Chicago"],
          backgroundColor: "rgba(199, 232, 252,0.2)",
          borderColor: "rgba(199, 232, 252,1)",
          data: [{
            x: 0.71,
            y: 35,
            r: 22
          }]
        }, {
          label: ["Atlanta"],
          backgroundColor: "rgba(131, 193, 236,0.2)",
          borderColor: "rgba(131, 193, 236,1)",
          data: [{
            x: 0.58,
            y: 20,
            r: 6
          }]
        },{
          label: ["Dallas"],
          backgroundColor: "rgba(64, 140, 203,0.2)",
          borderColor: "rgba(64, 140, 203,1)",
          data: [{
            x: 0.54,
            y: 37,
            r: 6
          }]
        }, {
          label: ["Detroit"],
          backgroundColor: "rgba(60, 83, 161,0.2)",
          borderColor: "rgba(60, 83, 161,1)",
          data: [{
            x: 0.35,
            y: 7,
            r: 9
          }]
        }
      ]
    },
    options: {
      title: {
        display: false,
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Ticket cost in $ (per person/year)"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Tickets (per person/year)"
          }
        }]
      }
    }
}
);
