// Henter bildeelementene
let dorbilderEl = document.querySelectorAll("img");
let arr = []
let array = ["https://assets.codepen.io/5037447/geit.png", "https://assets.codepen.io/5037447/bil.png", "https://assets.codepen.io/5037447/geit.png"];
let possible = [0, 1, 2]

document.getElementById("btn").addEventListener("click", function() {
  for (let i = 0; i < 3; i++) {
    console.log(i)
    o()
  }
})
// Går gjennom alle bildene og legger på samme lytter på hver av dem
for (let i = 0; i < dorbilderEl.length; i++) {
  dorbilderEl[i].addEventListener("click", sjekkDor);
}

// Funksjon som sjekker hvilken dør som ble trykket
function sjekkDor(e) {
  let trykketDor = e.target;
  console.log(trykketDor.id);
  console.log(trykketDor.src[38]);
  for (let i = 0; i < trykketDor.length; i++) {

  }
  // Bytter ut bilde av valgt dør med geit eller bil
  o(e)
}

function o() {
  let num = Math.floor(Math.random() * possible.length)
  arr.push(array[possible[num]]);
  document.getElementById("a").innerHTML += possible[num]

  possible.splice(num, 1)

}

/*  if( num === 0 || num ===1) {
  e.target.src = array[2];
}
e.target.src = 
*/
