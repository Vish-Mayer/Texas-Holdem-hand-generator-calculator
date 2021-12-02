import { Deck } from "./deck";

export class Table {
  constructor(name) {
    this.name = name;
    this.board = [];
    this.seats = [];
    this.deck = new Deck();
  }

  getWinner() {
    let seats = this.seats;
    let splitPot = false;
    let winner;
    for (let i = 1; i < seats.length; i++) {
      if (
        seats[0].hand.rank === seats[i].hand.rank &&
        seats[0].hand.value === seats[i].hand.value
      ) {
        splitPot = true;
        winner = [seats[0], seats[i]];
      } else {
        winner = seats[0];
      }
    }
    return {
      name: this.name,
      board: this.board,
      splitPot: splitPot,
      winner: winner,
      seats: seats
    };
  }
}
