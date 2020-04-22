$(function () {
  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    console.log(result);
    var no = 1;
    var confirmed = 0;
    var deaths = 0;
    var recovered = 0;
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
      confirmed = confirmed + selectedCountry[total - 1].confirmed;
      deaths = deaths + selectedCountry[total - 1].deaths;
      recovered = recovered + selectedCountry[total - 1].recovered;
    }
    $("#confirmed").append(confirmed);
    $("#deaths").append(deaths);
    $("#recovered").append(recovered);
    var ctxB = document.getElementById("barChart").getContext("2d");
    var myBarChart = new Chart(ctxB, {
      type: "bar",
      data: {
        labels: ["Confirmed", "Deaths", "Recovered"],
        datasets: [
          {
            label: "Total",
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
  });
});
