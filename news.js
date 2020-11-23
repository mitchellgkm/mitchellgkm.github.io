newscardsection = document.getElementById("newscardsection");

newscardsection.style.visibility = "hidden";

newsbutton = document.getElementById("newsbutton");

newsbutton.addEventListener("click", (event) => {
  newscardsection.style.visibility = "visible";
  getNews();
});

function getNews() {
  fetch(
    "https://gnews.io/api/v4/top-headlines?q=technology&lang=en&country=us&token=e06bf95933475a42fa3991b29f5cd00e"
  ) //GET request to Gnews server
    .then(function (response) {
      //Convert the response into a JSON object
      return response.json();
    })
    .then(function (data) {
      //Access the JSON object
      for (var i = 0; i < 8; i++) {
        document
          .getElementById(`newsimg${i}`)
          .setAttribute("src", data.articles[i].image); //Insert each object's article image

        document.getElementById(`newstitle${i}`).innerText =
          data.articles[i].title; //Insert each title

        document
          .getElementById(`newstitle${i}`)
          .setAttribute("href", data.articles[i].url); //Insert url into title / image
      }
    });
}
