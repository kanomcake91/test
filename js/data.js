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

    $.getJSON(url, function (result) {
      var confirmed1 = 0,
        confirmed2 = 0,
        confirmed3 = 0,
        confirmed4 = 0,
        confirmed5 = 0,
        confirmed6 = 0,
        deaths1 = 0,
        deaths2 = 0,
        deaths3 = 0,
        deaths4 = 0,
        deaths5 = 0,
        deaths6 = 0,
        recovered1 = 0,
        recovered2 = 0,
        recovered3 = 0,
        recovered4 = 0,
        recovered5 = 0,
        recovered6 = 0;
      for (var country in result) {
        var selectedCountry = result[country];
        var total = selectedCountry.length;

        confirmed1 = confirmed1 + selectedCountry[total - 1].confirmed;
        confirmed2 = confirmed2 + selectedCountry[total - 7].confirmed;
        confirmed3 = confirmed3 + selectedCountry[total - 14].confirmed;
        confirmed4 = confirmed4 + selectedCountry[total - 21].confirmed;
        confirmed5 = confirmed5 + selectedCountry[total - 28].confirmed;
        confirmed6 = confirmed6 + selectedCountry[total - 35].confirmed;

        deaths1 = deaths1 + selectedCountry[total - 1].deaths;
        deaths2 = deaths2 + selectedCountry[total - 7].deaths;
        deaths3 = deaths3 + selectedCountry[total - 14].deaths;
        deaths4 = deaths4 + selectedCountry[total - 21].deaths;
        deaths5 = deaths5 + selectedCountry[total - 28].deaths;
        deaths6 = deaths6 + selectedCountry[total - 35].deaths;

        recovered1 = recovered1 + selectedCountry[total - 1].recovered;
        recovered2 = recovered2 + selectedCountry[total - 7].recovered;
        recovered3 = recovered3 + selectedCountry[total - 14].recovered;
        recovered4 = recovered4 + selectedCountry[total - 21].recovered;
        recovered5 = recovered5 + selectedCountry[total - 28].recovered;
        recovered6 = recovered6 + selectedCountry[total - 35].recovered;

        week1 = selectedCountry[total - 1].date;
        week2 = selectedCountry[total - 7].date;
        week3 = selectedCountry[total - 14].date;
        week4 = selectedCountry[total - 21].date;
        week5 = selectedCountry[total - 28].date;
        week6 = selectedCountry[total - 35].date;
      }

      var ctx = document.getElementById("myAreaChart");
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [week6, week5, week4, week3, week2, week1],
          datasets: [
            {
              label: "Confirmed : ",
              lineTension: 0.3,
              backgroundColor: "rgba(54, 162, 235, 0.05)",
              borderColor: "rgba(54, 162, 235, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(54, 162, 235, 1)",
              pointBorderColor: "rgba(54, 162, 235, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
              pointHoverBorderColor: "rgba(255, 206, 86, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [
                confirmed6,
                confirmed5,
                confirmed4,
                confirmed3,
                confirmed2,
                confirmed1,
              ],
            },
            {
              label: "Deaths : ",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.3)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
              pointHoverBorderColor: "rgba(255, 206, 86, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [deaths6, deaths5, deaths4, deaths3, deaths2, deaths1],
            },
            {
              label: "Recovered : ",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 206, 86, 1)",
              pointBorderColor: "rgba(255, 206, 86, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
              pointHoverBorderColor: "rgba(255, 206, 86, 0.2)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [
                recovered6,
                recovered5,
                recovered4,
                recovered3,
                recovered2,
                recovered1,
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
