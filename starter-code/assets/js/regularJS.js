var gameState = {
  userPokemon: "",
  rivalPokemon: "",
  pokemonDB: [
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
  ],
  elements: {
    pokemonsEl: document
      .querySelector(".select-screen")
      .querySelectorAll(".character"),
    battleScreenEL: document.getElementById("battle-screen"),
    attackBtnEl: document
      .getElementById("battle-screen")
      .querySelectorAll(".attack")
  },
  init: function() {
    //console.log(pokemonsEl);
    var i = 0;
    // this is the initial loop
    while (i < gameState.elements.pokemonsEl.length) {
      //add function to all characters on screen select
      gameState.elements.pokemonsEl[i].onclick = function() {
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
        gameState.cpuPick();
        // chamge screen to battle screen
        gameState.elements.battleScreenEL.classList.toggle("active");

        // select data from current user pokemon

        gameState.currentPokemon = gameState.pokemonDB.filter(function(
          pokemon
        ) {
          return pokemon.name === gameState.userPokemon;
        });

        player1Img[0].src = gameState.currentPokemon[0].img;
        //console.log(currentPokemon);
        // select data from cpu pokemon
        gameState.currentRivalPokemon = gameState.pokemonDB.filter(function(
          pokemon
        ) {
          return pokemon.name === gameState.rivalPokemon;
        });
        player2Img[0].src = gameState.currentRivalPokemon[0].img;

        //console.log(player1Img[0]);

        // currentUsser and cpu pokemon initial health
        gameState.currentPokemon[0].health = gameState.calculateInitialHealth(
          gameState.currentPokemon
        );
        gameState.currentPokemon[0].originalHealth = gameState.calculateInitialHealth(
          gameState.currentPokemon
        );
        gameState.currentRivalPokemon[0].health = gameState.calculateInitialHealth(
          gameState.currentRivalPokemon
        );
        gameState.currentRivalPokemon[0].originalHealth = gameState.calculateInitialHealth(
          gameState.currentRivalPokemon
        );

        console.log(gameState);
      };
      i++;
    }

    var a = 0;
    while (a < gameState.elements.attackBtnEl.length) {
      gameState.elements.attackBtnEl[a].onclick = function() {
        var attackName = this.dataset.attack;
        gameState.currentUserAttack = attackName;
        //console.log(gameState.currentUserAttack);
        gameState.play(attackName, gameState.cpuAttack());
      };
      a++;
    }
  },
  play: function(userAttack, cpuAttack) {
    var currentPokemon = gameState.currentPokemon[0];
    var currentRivalPokemon = gameState.currentRivalPokemon[0];
    currentPokemon.owner = "user";
    currentRivalPokemon.owner = "cpu";
    switch (userAttack) {
      case "rock":
        if (cpuAttack === "paper") {
          //console.log("paper killed rock");
          //user
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              0.5,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                2,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
          //cpu;
        }
        if (cpuAttack === "scissors") {
          //user
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              2,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                0.5,
                currentPokemon,
                currentRivalPokemon
              );
            }
            //cpu;
          }
        }
        if (cpuAttack === "rock") {
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              1,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                1,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
          //cpu;
        }
        break;
      case "paper":
        if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
          if (cpuAttack === "paper") {
            //console.log("paper killed rock");
            //user
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              1,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                1,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        if (cpuAttack === "scissors") {
          //user
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              0.5,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                2,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        if (cpuAttack === "rock") {
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              2,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                0.5,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        break;
      case "scissors":
        if (cpuAttack === "paper") {
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            //console.log("paper killed rock");
            //user
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              2,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                0.5,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        if (cpuAttack === "scissors") {
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            //user
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              1,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                1,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        if (cpuAttack === "rock") {
          if (currentPokemon.health >= 1 && currentRivalPokemon.health >= 1) {
            gameState.attackMove(
              currentPokemon.attack,
              currentPokemon.level,
              0.8,
              0.5,
              currentRivalPokemon,
              currentPokemon
            );
            if (currentRivalPokemon.health >= 1) {
              //cpu;
              gameState.attackMove(
                currentRivalPokemon.attack,
                currentRivalPokemon.level,
                0.8,
                2,
                currentPokemon,
                currentRivalPokemon
              );
            }
          }
        }
        break;
    }
  },
  cpuAttack: function() {
    var attacks = ["rock", "paper", "scissors"];

    return attacks[gameState.randomNumber(0, 3)];
  },

  calculateInitialHealth: function(user) {
    // console.log(user[0].level);
    return 0.2 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;
  },

  attackMove: function(attack, level, stack, critical, enemy, attacker) {
    console.log(enemy.name + " before " + enemy.health);

    var attackAmount = attack * level * (stack + critical);
    enemy.health = enemy.health - attackAmount;
    var userHP = document
      .querySelector(".player1")
      .querySelector(".stats")
      .querySelector(".health")
      .querySelector(".health-bar")
      .querySelector(".inside");
    console.log(userHP);
    var cpuHP = document
      .querySelector(".player2")
      .querySelector(".stats")
      .querySelector(".health")
      .querySelector(".health-bar")
      .querySelector(".inside");

    if (enemy.owner === "user") {
      var minusPersent = (enemy.health * 100) / enemy.originalHealth;
      userHP.style.width = (minusPersent < 0 ? 0 : minusPersent) + "%";
    } else {
      var minusPersent = (enemy.health * 100) / enemy.originalHealth;
      cpuHP.style.width = (minusPersent < 0 ? 0 : minusPersent) + "%";
    }

    gameState.checkWinner(enemy, attacker);
    console.log(enemy.name + "after " + enemy.health);
  },

  checkWinner: function(enemy, attacker) {
    if (enemy.health <= 0) {
      console.log("you are the WINNER " + attacker.name);
    }
  },
  // find a number form 0 to ...
  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  cpuPick: function() {
    do {
      gameState.rivalPokemon =
        gameState.elements.pokemonsEl[
          gameState.randomNumber(0, 3)
        ].dataset.pokemon;
      console.log("looping" + gameState.rivalPokemon);
    } while (gameState.userPokemon === gameState.rivalPokemon);
  }
};
gameState.init();
