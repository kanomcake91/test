$(function () {
  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("country"));
  var country = urlParams.get("country");
  $("#country").html(country);
  var Total = 0;
  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    var selectedCountry = result[country];
    console.log(selectedCountry);
    for (var i = 0; i < selectedCountry.length; i++) {
      var row = `<tr>
        <th scope="row">${selectedCountry[i].date}</th>
        <td>${selectedCountry[i].confirmed}</td>
        <td>${selectedCountry[i].deaths}</td>
        <td>${selectedCountry[i].recovered}</td>
                </tr>`;
      $("#data").append(row);
    }
  });
  $.getJSON(url, function (result) {
    var row2 = `
    <?php
      $csv = fopen("https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv");
      while(!feof($csv)){
        print_r(fgetcsv($csv[0]))
      }
    ?>`;
    $("#gg").append(row2);
  });
});
