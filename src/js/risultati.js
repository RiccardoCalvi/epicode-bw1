let domande = localStorage.getItem("domande")
let corrette = localStorage.getItem("punteggio")
let sbagliate = domande - corrette

console.log(corrette)
console.log(domande)
console.log(sbagliate)