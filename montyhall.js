// Henter bildeelementene
let dorbilderEl = document.querySelectorAll("img");

// Går gjennom alle bildene og legger på samme lytter på hver av dem
for (let i = 0; i < dorbilderEl.length; i++) {
  dorbilderEl[i].addEventListener("click", sjekkDor);
}

// Funksjon som sjekker hvilken dør som ble trykket
function sjekkDor(e) {
  let trykketDor = e.target;
  console.log(trykketDor.id);
  for (let i = 0; i < trykketDor.length; i++) {

  }
  // Bytter ut bilde av valgt dør med geit eller bil
  o(e)
}
let array = ["https://assets.codepen.io/5037447/geit.png", "https://assets.codepen.io/5037447/bil.png", "https://assets.codepen.io/5037447/geit.png"];
let possible = [0, 1, 2]

function o(e) {
  let num = Math.floor(Math.random() * possible.length)
  e.target.src = array[possible[num]];
  document.getElementById("a").innerHTML += possible[num]
  if( num === 0 || num ===1) {
    e.target.src = array[2];
  }
  possible.splice(num, 1)

}
