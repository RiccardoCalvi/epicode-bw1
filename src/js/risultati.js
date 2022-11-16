let domande = localStorage.getItem("domande");
let corrette = localStorage.getItem("punteggio");
// let domande = 10;
// let corrette = 5;
let errate = domande - corrette;

console.log(corrette);
console.log(domande);
console.log(errate);

let percentualeCorrette = Math.floor((corrette / domande) * 100);
let percentualeErrate = Math.floor((errate / domande) * 100);
console.log(percentualeCorrette);

let corrette_perc = document.querySelector("#corrette h3");
let corrette_numero = document.querySelector("#corrette p");

let errate_perc = document.querySelector("#errate h3");
let errate_numero = document.querySelector("#errate p");

corrette_perc.innerHTML = percentualeCorrette + "%";
errate_perc.innerHTML = percentualeErrate + "%";

corrette_numero.innerHTML = `${corrette}/${domande}` + " Question";
errate_numero.innerHTML = `${errate}/${domande}` + " Question";
let testo = "";
let testo_risultato = document.getElementById("testo_doughnut");

creaGrafico();
cambiaTesto();

function cambiaTesto() {
  if (percentualeCorrette >= 60) {
    testo = " Congratulazioni";
  } else {
    testo = "Mi dispiace";
  }
  testo_risultato.innerHTML = testo;
}

function creaGrafico() {
  let myCanvas = document.querySelector("#myCanvas").getContext("2d");
  let myLabels = ["Wrong", "Correct"];
  let myData = [errate, corrette];

  let chart = new Chart(myCanvas, {
    type: "doughnut",
    data: {
      labels: myLabels,
      datasets: [
        {
          label: "Punteggio",
          data: myData,
          backgroundColor: ["#D20094", "#00FFFF"],
          hoverBorderColor: "#000000",
          hoverBorderWidth: 1,
          hoverOffset: 2,
          cutout: "70%",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
