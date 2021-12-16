import { Deck } from "./deck.js";
import { cardOrder } from "./helpers/cardOrder.js";

export class Table {
  constructor(name) {
    this.name = name;
    this.board = [];
    this.seats = [];
    this.deck = new Deck();
  }

  getWinnerTexasHoldem() {
    let seats = this.seats;
    let splitPot = [];
    let winner = [];

    for (let i in seats) {
      seats[i].hand.kicker =
        seats[i].hand.value === "JKLMN"
          ? "5432A"
          : (seats[i].hand.kicker = seats[0].hand.value
              .split("")
              .map(
                val => cardOrder.split("").reverse()[val.charCodeAt(0) - 65]
              ));
    }

    for (let i = 1; i < seats.length; i++) {
      const sameHand =
        seats[0].hand.rank === seats[i].hand.rank &&
        seats[0].hand.value === seats[i].hand.value;
      if (sameHand) splitPot.push(seats[i]);
    }
    splitPot.length > 0 ? splitPot.push(seats[0]) : winner.push(seats[0]);

    return {
      name: this.name,
      board: this.board,
      splitPot: splitPot,
      winner: winner,
      sortedPlayers: seats
    };
  }
}
