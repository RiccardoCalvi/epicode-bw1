let quantita;
let punteggio = 0;
let livello = localStorage.getItem("livello");

switch (livello) {
  case "easy":
    quantita = 10;
    break;
  case "medium":
    quantita = 15;
    break;
  case "hard":
    quantita = 20;
    break;

  default:
    quantita = 10;
    livello = "easy";
    break;
}
console.log(livello);

let domande = [];
let titolo = document.getElementById("titolo_domanda");
let pulsante_1 = document.getElementById("risposta_1");
let pulsante_2 = document.getElementById("risposta_2");
let pulsante_3 = document.getElementById("risposta_3");
let pulsante_4 = document.getElementById("risposta_4");
let question = document.getElementById("question");
let corrette_utente = [];
let errate_utente = [];

fetch(
  `https://opentdb.com/api.php?amount=${quantita}&category=18&difficulty=${livello}`
)
  .then((response) => response.json())
  .then((domande) => {
    domande = domande.results;
    let i = 0;
    var tempo = 30;
    var timer = tempo;
    let interval;

    costruisci(domande[i]);
    avviaTimer();

    function avviaTimer() {
      interval = setInterval(function () {
        document.getElementById("timer").innerHTML = timer;

        if (i >= domande.length) {
          exit();
        } else {
          if (timer === 0) {
            clearInterval(interval);
            timer = tempo;
            i++;
            avviaTimer();
            costruisci(domande[i]);
          }
          timer--;
          checkPulsanti();
        }
      }, 1000);
    }

    function controllaRisposte(risposta, domanda) {
      if (risposta.innerHTML == domanda.correct_answer) {
        corrette_utente.push(risposta.innerHTML);
        punteggio++;
      } else {
        errate_utente.push(domanda.correct_answer);
      }

      if (i >= domande.length) {
        exit();
      } else {
        i++;
        costruisci(domande[i]);
      }
      clearInterval(interval);
      timer = tempo;
      avviaTimer();
    }

    function checkPulsanti() {
      pulsante_1.onclick = () => {
        controllaRisposte(pulsante_1, domande[i]);
      };
      pulsante_2.onclick = () => {
        controllaRisposte(pulsante_2, domande[i]);
      };
      pulsante_3.onclick = () => {
        controllaRisposte(pulsante_3, domande[i]);
      };
      pulsante_4.onclick = () => {
        controllaRisposte(pulsante_4, domande[i]);
      };
    }

    function exit() {
      window.location.replace("results.html");
      localStorage.setItem("punteggio", punteggio);
      localStorage.setItem("domande", quantita);
      localStorage.setItem("corrette", corrette_utente);
      localStorage.setItem("errate", errate_utente);
    }

    function costruisci(elemento) {
      if (i === domande.length) {
        document.getElementById(
          "question"
        ).innerHTML = `Question ${i}<span class="viola"> / ${domande.length}</span>`;
      } else {
        document.getElementById("question").innerHTML = `Question ${i + 1
          }<span class="viola"> / ${domande.length}</span>`;
      }
      let risposte = [];

      titolo.innerHTML = elemento.question;

      risposte.push(elemento.correct_answer);

      for (const risposta of elemento.incorrect_answers) {
        risposte.push(risposta);
      }

      shuffle(risposte);

      elemento.type == "boolean"
        ? quanti_pulsanti(risposte, true)
        : quanti_pulsanti(risposte, false);
    }

    function quanti_pulsanti(risposte, is_boolean) {
      if (is_boolean) {
        pulsante_1.innerHTML = risposte[0];
        pulsante_2.innerHTML = risposte[1];
        pulsante_3.classList.add("nascondi");
        pulsante_4.classList.add("nascondi");
      } else {
        pulsante_1.innerHTML = risposte[0];
        pulsante_2.innerHTML = risposte[1];
        pulsante_3.innerHTML = risposte[2];
        pulsante_4.innerHTML = risposte[3];
        pulsante_3.classList.remove("nascondi");
        pulsante_4.classList.remove("nascondi");
      }
    }

    function shuffle(array) {
      for (let i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * i);
        [array[i], array[random]] = [array[random], array[i]];
      }
      return array;
    }
  });
