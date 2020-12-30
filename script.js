document
  .getElementById("portfoliobuttons")
  .addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return; //Break if not a button clicked on (i.e. elsewhere in the container)
    }

    const buttonId = event.target.id;

    for (var i = 0; i < 3; i++) {
      let button = document.getElementsByClassName("btn")[i];
      button.classList.remove("selected");
    }

    if (!document.getElementById(buttonId).classList.contains("selected")) {
      document.getElementById(buttonId).classList.add("selected");
    }
  });
