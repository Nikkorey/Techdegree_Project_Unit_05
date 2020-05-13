// lightbox jquery plug in
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 800,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
  showImageNumberLabel: false,
});

// search filter
function myFunction() {
  var input, filter, main, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  main = document.getElementById("photos");
  div = main.getElementsByClassName("main__photos");
  for (i = 0; i < div.length; i++) {
    a = div[i].getElementsByClassName("search")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
