// Tabs

document.getElementById("defaultOpen").click();

function openCalc(evt, calcName) {
  // Declare all variables
  var i, calctab, tablinks;

  // Get all elements with class="calctab" and hide them
  calctab = document.getElementsByClassName("calctab");
  for (i = 0; i < calctab.length; i++) {
    calctab[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(calcName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Calculations

function investment() {
  var savings = document.getElementById("savings").value;

  var rate = 1 + document.getElementById("rate").value / 100;

  var years = document.getElementById("years").value;

  var multiplier = Math.pow(years, rate);
  console.log(multiplier);

  result = Math.round(savings * multiplier)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (result != NaN) {
    document.getElementById("investmentresult").innerHTML = "£" + result;
  }
}

function income() {
  var gross = document.getElementById("gross").value;

  var pension = 1 - document.getElementById("pension").value / 100;

  var student = 1;
  if (document.getElementById("student").checked == true) {
    student = 0.8;
  }

  result = Math.round(gross * pension * student)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (result != NaN) {
    document.getElementById("incomeresult").innerHTML = "£" + result;
  }
}

function loan() {
  var loanamount = document.getElementById("loanamount").value;

  var interest = document.getElementById("interest").value / 1200;
  console.log(interest);

  var months = document.getElementById("months").value;

  var x = Math.pow(1 + interest, months);

  if (interest == 0) {
    result = Math.round(loanamount / months)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    result = Math.round((loanamount * x * interest) / (x - 1))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (result != NaN) {
    document.getElementById("loanresult").innerHTML = "£" + result;
  }
}
