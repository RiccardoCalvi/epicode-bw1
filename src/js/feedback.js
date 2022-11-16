function change(array) {
  array.forEach((stellina) => {
    var stella = document.getElementById(stellina);
    stella.classList.add("piena");
  });
}

function changeRest(array) {
  array.forEach((stellina) => {
    var stella = document.getElementById(stellina);
    stella.classList.remove("piena");
  });
}
