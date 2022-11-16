function change(array) {
  array.forEach((stellina) => {
    var stella = document.getElementById(stellina);
    stella.setAttribute("name", "star");
  });
}

function changeRest(array) {
  array.forEach((stellina) => {
    var stella = document.getElementById(stellina);
    stella.setAttribute("name", "star-outline");
  });
}
