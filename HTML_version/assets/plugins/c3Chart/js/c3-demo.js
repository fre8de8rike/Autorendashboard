$(function () {
var chart = c3.generate({
    bindto: '#area-chart',
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});

});

$(function () {
var chart = c3.generate({
    bindto: '#area-chartZON',
    data: {
        columns: [
            ['LeserAlle', 15123, 10000, 9154, 8123, 7000, 6487, 5157],
            ['Homepage', 9542, 8152, 8000, 8000, 7000, 6000, 4000],
            ['Facebook', 2500, 2354, 2000, 1900, 1654, 1500, 1846],
            ['GoogleSuche', 6000, 5500, 5000, 4000, 4000, 1800, 1900],
        ],
        types: {
            LeserAlle: 'area',
            Facebook: 'area-spline',
            Homepage: "area",
            GoogleSuche:"area"
        },
    },


});

});



$(function () {
var chart = c3.generate({
     bindto: '#combination-chart',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150],
            ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            data3: 'spline',
            data4: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});
});

$(function () {
      var chart = c3.generate({
         bindto: '#zoom',
        data: {
          columns: [
            ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
          ]
        },
        zoom: {
          enabled: true
        }
      });
});
