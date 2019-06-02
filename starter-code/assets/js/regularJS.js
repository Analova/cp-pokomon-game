var pokemonDB = [
  {
    name: "bulbasaur",
    type: "fire",
    hp: 39,
    attack: 52,
    defense: 43,
    level: 1,
    img: "https://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif"
  },
  {
    name: "charmander",
    type: "fire",
    hp: 45,
    attack: 49,
    defense: 49,
    level: 1,
    img: "https://www.smogon.com/dex/media/sprites/xy/charmander.gif"
  },
  {
    name: "squirtle",
    type: "water",
    hp: 44,
    attack: 48,
    defense: 65,
    level: 1,
    img: "https://www.smogon.com/dex/media/sprites/xy/squirtle.gif"
  }
];
var gameState = {
  userPokemon: "",
  rivalPokemon: ""
};

console.log(gameState);
var pokemonsEl = document
  .querySelector(".select-screen")
  .querySelectorAll(".character");
var battleScreenEL = document.getElementById("battle-screen");

//console.log(pokemonsEl);
var i = 0;
while (i < pokemonsEl.length) {
  pokemonsEl[i].onclick = function() {
    var pokemonName = this.dataset.pokemon;
    //console.log("I pressed this polemon " + pokemonName);
    gameState.userPokemon = pokemonName;

    cpuPick();
    battleScreenEL.classList.toggle("active");
    console.log(gameState);
  };
  i++;
}

// find a number form 0 to ...
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function cpuPick() {
  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
}
