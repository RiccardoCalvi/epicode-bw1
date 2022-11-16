let domande = localStorage.getItem("domande")
let corrette = localStorage.getItem("punteggio")
let sbagliate = domande - corrette

console.log(corrette)
console.log(domande)
console.log(sbagliate)

let percentualeCorrette = Math.floor((corrette / domande)*100)
console.log(percentualeCorrette)





let myCanvas = document.querySelector("#myCanvas").getContext('2d');
let myLabels = ["Wrong", "Correct"];
let myData = [sbagliate, corrette];

let chart = new Chart(myCanvas, {
    type: 'doughnut',
    data: {
        labels: myLabels,
        datasets: [{
            label: "Punteggio",
            data: myData,
            backgroundColor: ['#D20094', '#00FFFF'],
            hoverBorderColor: '#000000',
            hoverBorderWidth: 1,
            hoverOffset: 2,
            cutout: '70%',
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});