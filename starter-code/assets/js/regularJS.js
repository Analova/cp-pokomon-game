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

    gameState.currentPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.userPokemon;
    });

    player1Img[0].src = gameState.currentPokemon[0].img;
    //console.log(currentPokemon);
    // select data from cpu pokemon
    gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon) {
      return pokemon.name === gameState.rivalPokemon;
    });
    player2Img[0].src = gameState.currentRivalPokemon[0].img;

    //console.log(player1Img[0]);
    gameState.currentPokemon[0].health = calculateInitialHealth(
      gameState.currentPokemon
    );

    console.log(gameState);

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

var calculateInitialHealth = function(user) {
  console.log(user[0].level);
  return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;
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

// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var stamina = 39;

// // create a formula for attacks
// console.log((attack * level ) * stack / 7)

// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)

// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2

// // when one user loses all his health declare a winner
