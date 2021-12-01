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
    let table = this.table;
    let splitPot = false;
    for (let player in table) {
      table[player].hand = table[player].findBestTexasHoldemHand(this.board);
    }

    table.sort(function(a, b) {
      if (a.hand.rank === b.hand.rank) {
        return a.hand.value > b.hand.value ? 1 : -1;
      }
      return a.hand.rank - b.hand.rank;
    });

    let winner;
    for (let i = 1; i < table.length; i++) {
      if (
        table[0].hand.rank === table[i].hand.rank &&
        table[0].hand.value === table[i].hand.value
      ) {
        splitPot = true;
        winner = [table[0], table[i]];
      } else {
        winner = table[0];
      }
    }

    return {
      board: this.board,
      splitPot: splitPot,
      winner: winner,
      allPlayers: table
    };
  }

  dealHoleCards() {
    for (let player in this.table) {
      this.table[player].holeCards.push(this.deck.dealCard());
    }

    for (let player in this.table) {
      this.table[player].holeCards.push(this.deck.dealCard());
    }
  }

  dealBoardCards() {
    let deck = this.deck;
    let board = this.board;
    deck.dealCard(); // burn card
    board.push(deck.dealCard());
    board.push(deck.dealCard());
    board.push(deck.dealCard());
    deck.dealCard(); // burn card
    board.push(deck.dealCard());
    deck.dealCard(); // burn card
    board.push(deck.dealCard());
  }

  populateTable() {
    let position = 1;
    for (let i in this.table) {
      this.table[i] = new Player(`Player${position}`);
      position = position + 1;
    }
  }
}
