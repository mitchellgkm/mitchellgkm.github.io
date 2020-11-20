newscardsection = $("#newscardsection");

newsbutton = $("#newsbutton");

$(newscardsection).hide();

function getNews() {
  fetch(
    "https://gnews.io/api/v4/top-headlines?q=technology&lang=en&token=e06bf95933475a42fa3991b29f5cd00e"
  ) //GET request to Gnews server
    .then(function (response) {
      //Convert the response into a JSON object
      return response.json();
    })
    .then(function (data) {
      //Access the JSON object
      for (var i = 0; i < 8; i++) {
        $(`#newsimg${i}`).attr("src", data.articles[i].image); //Insert each object's article image

        $(`#newstitle${i}`).text(data.articles[i].title); //Insert each title

        $(`#newstitle${i}`).attr("href", data.articles[i].url); //Insert url into title / image

        // $(`#newstext${i}`).text(data.articles[i].description); //Insert each description -> removed description
      }
    });
}

$(newsbutton).click(function (e) {
  e.preventDefault();
  $(newscardsection).show();
  getNews();
});
