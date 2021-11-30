import { Deck } from "./deck";
import { Player } from "./player";

export class TexasHoldem {
  constructor(numOfPlayers) {
    this.deck = new Deck();
    this.table = Array.from(new Array(numOfPlayers), () => []);
    this.populateTable();
  }

  dealRound() {
    this.deck.shuffle();
    this.dealHoleCards();
  }

  dealHoleCards() {
    for (let player in this.table) {
      this.table[player].hole.push(this.deck.dealCard());
    }

    for (let player in this.table) {
      this.table[player].hole.push(this.deck.dealCard());
    }
  }

  populateTable() {
    let position = 1;
    for (let i in this.table) {
      this.table[i] = new Player(`Player${position}`);
      position = position + 1;
    }
  }
}
