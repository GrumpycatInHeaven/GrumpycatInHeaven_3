      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Фактор', ''],
          ['Некоторые инфекционные и паразитарные болезни',     0.030233],
          ['Новообразования',      0.19866],
          ['Болезни системы кровообращения',  0.507258],
          ['Болезни органов дыхания', 0.053079],
          ['Болезни органов пищеварения',    0.063729],
          ['Внешние причины', 0.147041]
        ]);

        var options = {
           pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          
          title: 'Мужчины'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }