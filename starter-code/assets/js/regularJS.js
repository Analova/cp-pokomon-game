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
var attackBtnEl = document
  .getElementById("battle-screen")
  .querySelectorAll(".attack");
//console.log(attackBtnEl);

//console.log(pokemonsEl);
var i = 0;
// this is the initial loop
while (i < pokemonsEl.length) {
  //add function to all characters on screen select
  pokemonsEl[i].onclick = function() {
    // current  selected pokemons name
    var pokemonName = this.dataset.pokemon;
    //elements for images
    var player1Img = document
      .querySelector(".player1")
      .getElementsByTagName("img");
    var player2Img = document
      .querySelector(".player2")
      .getElementsByTagName("img");

    //console.log(gameState);
    //console.log("I pressed this pokemon " + pokemonName);

    //we saved the current polemon
    gameState.userPokemon = pokemonName;

    // cpu pics a pokemon
    cpuPick();
    // chamge screen to battle screen
    battleScreenEL.classList.toggle("active");
    // select data from current user pokemon

    var currentPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.userPokemon;
    });

    player1Img[0].src = currentPokemon[0].img;
    //console.log(currentPokemon);
    // select data from cpu pokemon
    var currentRivalPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.rivalPokemon;
    });
    player2Img[0].src = currentRivalPokemon[0].img;

    //console.log(player1Img[0]);

    // user choose attack

    // cpu health goes down

    // cpu attack

    // user health goes down

    // rock > scissors

    // paper > rock

    // scissors > paper

    // depending on pokemon type and defense is how hard he attack is going to be
    // and how much health it will take down

    // then who ever gets to health  <= 0 loses
  };
  i++;
}

var a = 0;
while (a < attackBtnEl.length) {
  attackBtnEl[a].onclick = function() {
    var attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName;
    //console.log(gameState.currentUserAttack);
    play(attackName, cpuAttack());
  };
  a++;
}

var cpuAttack = function() {
  var attacks = ["rock", "paper", "scissors"];

  return attacks[randomNumber(0, 3)];
};

var play = function(userAttack, cpuAttack) {
  switch (userAttack) {
    case "rock":
      //console.log(userAttack);
      if (cpuAttack === "paper") {
        console.log("paper killed rock");
      }
      if (cpuAttack === "scissors") {
        console.log("rock killed scissors");
      }
      if (cpuAttack === "rock") {
        console.log("It is a draw");
      }
      break;
    case "paper":
      //console.log(userAttack);
      break;
    case "scissors":
      //console.log(userAttack);
      break;
  }
};

// find a number form 0 to ...
var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var cpuPick = function() {
  gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon;
};

//<div class="battle-btns">
//        <div class=" attack rock" data-attack="rock">
//          <img src="//i.imgur.com/0sWAgmm.png" width="100%" />
//          Rock
//        </div>
//        <div class="attack  paper" data-attack="paper">
//          <img src="//i.imgur.com/aU8NcKH.png" />
//          Paper
//        </div>
//        <div class="attack  scissors" data-attack="scissors">
//          <img src="//i.imgur.com/n4HFHgj.png" />
//          Scissors
//        </div>
//      </div>
