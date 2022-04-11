import { Game } from "./memory.js";

let game = new Game(["1", "2", "3", "4", "5", "6", "7", "8"]);

console.log(game.shuffleArray());

game.firstCard("3");
console.log(game.value);
game.secondCard("3");
console.log(game.newArray);
