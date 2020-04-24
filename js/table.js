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
  });
});
