import { Deck } from "./deck";
import { Player } from "./player";

export class TexasHoldem {
  constructor(numOfPlayers) {
    const deck = new Deck();
    this.table = Array.from(new Array(numOfPlayers), () => []);
    this.populateTable();
  }

  populateTable() {
    let position = 1;
    for (let i in this.table) {
      this.table[i] = new Player(`Player${position}`);
      position = position + 1;
    }
  }
}
