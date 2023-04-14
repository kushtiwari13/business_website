  // Get the card element and form pop-up element
  var card1 = document.getElementById("my-card1");
  var card2 = document.getElementById("my-card2");
  var card3 = document.getElementById("my-card3");
  var card4 = document.getElementById("my-card4");
  var card5 = document.getElementById("my-card5");
  var card6 = document.getElementById("my-card6");

  var formPopup = document.getElementById("myForm");

  // Add event listener to card element
  card1.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });

  card2.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });

  card3.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });

  card4.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });

  card5.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });

  card6.addEventListener("click", function () {
    // Display the form pop-up
    formPopup.style.display = "block";
  });



  // Function to close the form pop-up
  function closeForm() {
    formPopup.style.display = "none";
  }
