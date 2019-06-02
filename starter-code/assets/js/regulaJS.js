var pokemonsEl = document
  .querySelector(".select-screen")
  .querySelectorAll(".character");

console.log(pokemonsEl);
var i = 0;
while (i < pokemonsEl.length) {
  pokemonsEl[i].onclick = function() {
    var pokemonName = this.dataset.pokemon;
    console.log("I pressed this polemon " + pokemonName);
  };
  i++;
}
