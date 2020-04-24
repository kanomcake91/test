$(function () {
  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    console.log(result);
    var no = 1;
    var confirmed = 0;
    var deaths = 0;
    var recovered = 0;
    var date = 0;
    for (var country in result) {
      var row = `<tr>
                          <th scope="row">${no}</th>
                          <td><a href="country.html?country=${country}">${country}</a></td>
                   </tr>`;
      $("#data").append(row);
      no++;
    }
    for (var country in result) {
      var selectedCountry = result[country];
      var total = selectedCountry.length;
      date = selectedCountry[total - 1].date;
      confirmed = confirmed + selectedCountry[total - 1].confirmed;
      deaths = deaths + selectedCountry[total - 1].deaths;
      recovered = recovered + selectedCountry[total - 1].recovered;
    }
    console.log(date);

    $("#confirmed").append(confirmed + " People");
    $("#deaths").append(deaths + " People");
    $("#recovered").append(recovered + " People");
    var ctxB = document.getElementById("barChart");
    var myBarChart = new Chart(ctxB, {
      type: "bar",
      data: {
        labels: ["Confirmed", "Deaths", "Recovered"],
        datasets: [
          {
            label: ["Total for", date],
            data: [confirmed, deaths, recovered],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255,99,132,1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    var totalconfirmed1 = [],
      totalconfirmed2 = [],
      totalconfirmed3 = [],
      totalconfirmed4 = [],
      totalconfirmed5 = [],
      totalconfirmed6 = [];
    var totalweek1 = [],
      totalweek2 = [],
      totalweek3 = [],
      totalweek4 = [],
      totalweek5 = [],
      totalweek6 = [];
    $.getJSON(url, function (result) {
      var confirmed1 = 0,
        confirmed2 = 0,
        confirmed3 = 0,
        confirmed4 = 0,
        confirmed5 = 0,
        confirmed6 = 0;
      for (var country in result) {
        var selectedCountry = result[country];
        var total = selectedCountry.length;

        confirmed1 = confirmed1 + selectedCountry[total - 1].confirmed;
        confirmed2 = confirmed2 + selectedCountry[total - 7].confirmed;
        confirmed3 = confirmed3 + selectedCountry[total - 14].confirmed;
        confirmed4 = confirmed4 + selectedCountry[total - 21].confirmed;
        confirmed5 = confirmed5 + selectedCountry[total - 28].confirmed;
        confirmed6 = confirmed6 + selectedCountry[total - 35].confirmed;

        week1 = selectedCountry[total - 1].date;
        week2 = selectedCountry[total - 7].date;
        week3 = selectedCountry[total - 14].date;
        week4 = selectedCountry[total - 21].date;
        week5 = selectedCountry[total - 28].date;
        week6 = selectedCountry[total - 35].date;
      }

      totalconfirmed1.push(confirmed1),
        totalconfirmed2.push(confirmed2),
        totalconfirmed3.push(confirmed3),
        totalconfirmed4.push(confirmed4),
        totalconfirmed5.push(confirmed5),
        totalconfirmed6.push(confirmed6);

      totalweek1.push(week1),
        totalweek2.push(week2),
        totalweek3.push(week3),
        totalweek4.push(week4),
        totalweek5.push(week5),
        totalweek6.push(week6);

      var ctx = document.getElementById("myAreaChart");
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            totalweek6,
            totalweek5,
            totalweek4,
            totalweek3,
            totalweek2,
            totalweek1,
          ],
          datasets: [
            {
              label: "Confirmed : ",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
              pointHoverBorderColor: "rgba(255, 206, 86, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [
                totalconfirmed6,
                totalconfirmed5,
                totalconfirmed4,
                totalconfirmed3,
                totalconfirmed2,
                totalconfirmed1,
              ],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                time: {
                  unit: "date",
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  maxTicksLimit: 7,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
    });

    (Chart.defaults.global.defaultFontFamily = "Nunito"),
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = "#858796";

    function number_format(number, decimals, dec_point, thousands_sep) {
      // *     example: number_format(1234.56, 2, ',', ' ');
      // *     return: '1 234,56'
      number = (number + "").replace(",", "").replace(" ", "");
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point,
        s = "",
        toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return "" + Math.round(n * k) / k;
        };
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
      }
      return s.join(dec);
    }
  });
});
