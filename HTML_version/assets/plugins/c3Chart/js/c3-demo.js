$(function () {
var chart = c3.generate({
    bindto: '#area-chartZON',
    data: {
        columns: [
            ['LeserAlle', 15123, 10000, 9154, 8123, 7000, 6487, 5157],
            ['Homepage', 9542, 8152, 8000, 8000, 7000, 6000, 4000],
            ['Suche', 6000, 5500, 5000, 4000, 4000, 1800, 1900],
            ['Facebook', 2500, 2354, 2000, 1900, 1654, 1500, 1846],
        ],
        type: 'area',
        types: {
            LeserAlle: 'line',
            Facebook: 'area-spline',
            Homepage: 'area-spline',
            GoogleSuche: 'area-spline'
        },
        groups: [['Homepage', 'Suche', 'Facebook']],
        
    },


});

});



$(function () {
var chart = c3.generate({
     bindto: '#combination-chart',
    data: {
        columns: [
            ['Alle_Leser', 19041, 17006, 15900, 14780, 13454, 9900, 8146],
            ['Homepage', 10542, 8152, 8000, 8000, 7000, 6000, 4000],
            ['Suche', 5000, 5500, 5000, 4000, 4000, 1800, 1900],
            ['Facebook', 2500, 2354, 2000, 1900, 1654, 1500, 1846],
            ['Sonstige', 1000, 1000, 900, 880, 800, 600, 500],
        ],
        type: 'bar',
        types: {
            Alle_Leser: 'area',
            data4: 'line',
            data6: 'area',
        },
        groups: [
            ['Suche','Facebook', 'Sonstige']
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
