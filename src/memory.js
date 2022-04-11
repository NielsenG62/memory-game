export function Game(cards) {
  this.newArray = [];
  this.cards = cards;
  this.value = "";
}

Game.prototype.gameInit = function () {
  let deck = this.cards.concat(this.cards);
  this.shuffleArray(deck);
};

Game.prototype.shuffleArray = function () {
  let array = this.cards.concat(this.cards);
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
    this.newArray = array;
  }

  return this.newArray;
};

Game.prototype.firstCard = function (card) {
  this.value = card;
};

Game.prototype.secondCard = function (card) {
  let removal = this.newArray;
  if (this.value === card) {
    removal.forEach(function (element, index) {
      if (element === card) {
        removal.splice(index, 1);
      }
    });
  }
  this.newArray = removal;
};
