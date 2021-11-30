import { Deck } from "./deck";
import { Player } from "./player";

export class TexasHoldem {
  constructor(numOfPlayers) {
    this.deck = new Deck();
    this.table = Array.from(new Array(numOfPlayers), () => []);
    this.board = [];
    this.populateTable();
  }

  dealRound() {
    this.deck.shuffle();
    this.dealHoleCards();
    this.dealBoardCards();
  }

  dealHoleCards() {
    for (let player in this.table) {
      this.table[player].hole.push(this.deck.dealCard());
    }

    for (let player in this.table) {
      this.table[player].hole.push(this.deck.dealCard());
    }
  }

  dealBoardCards() {
    this.deck.dealCard(); // burn card
    this.board.push(this.deck.dealCard());
    this.board.push(this.deck.dealCard());
    this.board.push(this.deck.dealCard());
    this.deck.dealCard(); // burn card
    this.board.push(this.deck.dealCard());
    this.deck.dealCard(); // burn card
    this.board.push(this.deck.dealCard());
  }

  populateTable() {
    let position = 1;
    for (let i in this.table) {
      this.table[i] = new Player(`Player${position}`);
      position = position + 1;
    }
  }
}
