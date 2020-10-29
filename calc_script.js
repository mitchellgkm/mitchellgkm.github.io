function calculate() {
  var savings = document.getElementById("savings").value;

  var years = document.getElementById("years").value;

  result = (savings * years).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById("result").innerHTML = "£" + result;
  document.getElementById("result").style.border = "1px solid #404767";
}
