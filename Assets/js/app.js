function myFunction() {
  var x = document.getElementById("dropdown-content");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

var popupWindow = null;
function centeredPopup(url, winName, w, h, scroll) {
  LeftPosition = screen.width ? (screen.width - w) / 2 : 0;
  TopPosition = screen.height ? (screen.height - h) / 2 : 0;
  settings =
    "height=" +
    h +
    ",width=" +
    w +
    ",top=" +
    TopPosition +
    ",left=" +
    LeftPosition +
    ",scrollbars=" +
    scroll +
    ",resizable";
  popupWindow = window.open(url, winName, settings);
}
