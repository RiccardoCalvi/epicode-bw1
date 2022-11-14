  QUIZ GAME!

  REGOLE:
  L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
  Ogni risposta corretta gli darà 1 punto
  Le domande possono avere risposte multiple o singole (true/false)
  Al termine del quiz l'utente dovrà poter vedere il suo punteggio

  DOMANDE:
  Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
  Possono essere composte di boolean multipli (true / false)

  TIPS:
  Usa una variabile globale per registrare il punteggio dell'utente
  Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
  Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
  Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
  Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia 
  Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

  EXTRA:
  Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
  Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
  Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
  ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice, 
  usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )

  /* NON DIMENTICARE...
    di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
  */

  TIPS:

  SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  Per ogni domanda, crea un container e incorporale tutte all'interno. 
  Crea poi dei radio button
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  con le risposte corrette e incorrette come opzioni
  (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
  //
  SE MOSTRI UNA DOMANDA ALLA VOLTA:
  Mostra la prima domanda con il testo e i radio button.
  Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
  salvando le risposte dell'utente in una variabile
};

  Come calcolare il risultato? Hai due strade:
  Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
  Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

  BUON LAVORO 💪🚀
