// this is the database
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

//state
var gameState = {
  userPokemon: "",
  rivalPokemon: ""
};

console.log(gameState);
//elements
var pokemonsEl = document
  .querySelector(".select-screen")
  .querySelectorAll(".character");
var battleScreenEL = document.getElementById("battle-screen");

//console.log(pokemonsEl);
var i = 0;

// this is the initial loop
while (i < pokemonsEl.length) {
  pokemonsEl[i].onclick = function() {
    var pokemonName = this.dataset.pokemon;
    var player1Img = document
      .querySelector(".player1")
      .getElementsByTagName("img");
    var player2Img = document
      .querySelector(".player2")
      .getElementsByTagName("img");

    //console.log(gameState);
    //console.log("I pressed this pokemon " + pokemonName);
    gameState.userPokemon = pokemonName;

    cpuPick();
    battleScreenEL.classList.toggle("active");

    var currentPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.userPokemon;
    });

    var currentRivalPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.rivalPokemon;
    });

    player1Img[0].src = currentPokemon[0].img;
    console.log(currentPokemon);

    player2Img[0].src = currentRivalPokemon[0].img;

    //console.log(player1Img[0]);
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
