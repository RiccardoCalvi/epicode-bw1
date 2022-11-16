let domande = localStorage.getItem("domande");
let corrette = localStorage.getItem("punteggio");

let risposte_corrette = localStorage.getItem("corrette");
let risposte_errate = localStorage.getItem("errate");

// FOR DEBUG
// let domande = 10;
// let corrette = 6;
// let risposte_corrette = ["CIao", true, false, "Pippo"];
// let risposte_errate = ["addio", false, true, "Mondo"];

let errate = domande - corrette;
let perc_corrette = Math.floor((corrette / domande) * 100);
let perc_errate = Math.floor((errate / domande) * 100);
let testo_risultato = document.getElementById("testo_doughnut");
let h3_corrette = document.querySelector("#corrette h3");
let p_corrette = document.querySelector("#corrette p");
let h3_errate = document.querySelector("#errate h3");
let p_errate = document.querySelector("#errate p");
let ul_corrette = document.querySelector("#corrette ul");
let ul_errate = document.querySelector("#errate ul");
let testo;

creaGrafico();
cambiaTesti();

function cambiaTesti() {
  h3_corrette.innerHTML = perc_corrette + "%";
  h3_errate.innerHTML = perc_errate + "%";

  p_corrette.innerHTML = `${corrette}/${domande}` + " Question";
  p_errate.innerHTML = `${errate}/${domande}` + " Question";
  if (perc_corrette >= 60) {
    testo = " Congratulazioni";
  } else {
    testo = "Mi dispiace";
  }
  testo_risultato.innerHTML = testo;

  risposte_corrette.forEach((element) => {
    let li = document.createElement("li");
    ul_corrette.appendChild(li);
    li.textContent = element;
  });

  risposte_errate.forEach((element) => {
    let li = document.createElement("li");
    ul_errate.appendChild(li);
    li.textContent = element;
  });
}

function creaGrafico() {
  let myCanvas = document.querySelector("#myCanvas").getContext("2d");
  let myLabels = ["Wrong", "Correct"];
  let myData = [perc_errate, perc_corrette];

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
