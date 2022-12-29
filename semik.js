

function clusterChart(chartName) {
  var ctxB = document.getElementById(chartName).getContext('2d');
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: ["","","Test Cluster","",""],
    datasets: [{
      label: 'Cluster VS Ldb Count',
      data: [,,2.6,,],
      backgroundColor: [ 
        ,,
        'rgba(54, 162, 235, 1)',
        ,,
      ],
      borderColor: [
        ,,
        'black',
        ,,
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

}

const barChart2 = [
  { label: "LDB 01 565 7363", data: 3.1, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 02 565 7363", data: 4.1, backgroundColor:  'rgba(255,99,132,1)', borderColor: 'black' },
  { label: "LDB 03 565 7363", data: 3.1, backgroundColor:  'rgba(255, 206, 86, 1)', borderColor: 'black'},
  { label: "LDB 04 565 7363", data: 3.1, backgroundColor:   'rgba(75, 192, 192, 1)', borderColor: 'black'},
  { label: "LDB 05 565 7363", data: 2.1, backgroundColor:  'rgba(153, 102, 255, 1)', borderColor: 'black'},
  { label: "LDB 06 565 7363 ", data: 5.1, backgroundColor:  'rgba(255, 159, 64, 1)', borderColor: 'black'},
  { label: "LDB 07 565 7363", data: 4.1, backgroundColor:  'rgba(255,99,132,1)', borderColor: 'black'},
];

const barChart3 = [
  { label: "LDB 01", data: 4, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
  { label: "LDB 02", data: 4, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black' },
  { label: "LDB 03", data: 3, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
  { label: "LDB 04", data: 3, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
  { label: "LDB 05", data: 5, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
  { label: "LDB 06", data: 5, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
  { label: "LDB 07", data: 3, backgroundColor:  'rgba(54, 162, 235, 0.2)', borderColor: 'black'},
];
const barChart4 = [
  { label: "LDB 01", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 02", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black' },
  { label: "LDB 03", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 04", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 05", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 06", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
  { label: "LDB 07", data: 2.6, backgroundColor:  'rgba(54, 162, 235, 1)', borderColor: 'black'},
];

let data = []


function chart(chartName) {
  if(chartName == 'barChart2') {
    data = barChart2
  } else if 
  (chartName=='barChart3'){
    data=barChart3
  }else if( chartName=='barChart4'){
    data=barChart4
  }else if(chartName=='barChart5'){
    data=barChart5
  }
  console.log(data)
    var ctxB = document.getElementById(chartName).getContext('2d');
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: data.map(row => row.label),
    datasets: [{
      label: 'LDB',
      data:data.map(row => row.data), 
      backgroundColor:data.map(row => row.backgroundColor),
      borderColor: data.map(row => row.borderColor),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
}

clusterChart("barChart")

clusterChart("barChart1")

chart("barChart2")


chart("barChart4")



function multipleChart(chartName) {
  var ctxB = document.getElementById(chartName).getContext('2d');
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: ["LDB 0123 6537","LDB 0123 6537","TLDB 0123 6537t","LDB 0123 6537","LDB 0123 6537"],
    datasets: [{
      label: 'Relay 1 Onhours',
      data: [1,2,3.1,3,3],
      backgroundColor: [ 
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
        ,'rgba(54, 162, 235, 1)',
      ],
      borderColor: ['black'
        ,'black',
        'black',
        ,'black',
      ],
      borderWidth: 1
    },
    {
      label: 'Relay 2 Onhours',
      data: [3,3,3.1,2,2,4.1,3],
      backgroundColor: [ 'rgba(255, 206, 86, 1)'
        ,'rgba(255, 206, 86, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 206, 86, 1)'
        ,'rgba(255, 206, 86, 1)',
      ],
      borderColor: ['black'
        ,'black',
        'black',
        ,,
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

}


multipleChart("barChart3")

