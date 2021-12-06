import { Player } from "./player.js";

export class Lobby {
  constructor(numOfPlayers) {
    this.players = Array.from(new Array(numOfPlayers), () => "");
    this.getPlayers();
  }

  getPlayers() {
    let number = 1;
    for (let i in this.players) {
      this.players[i] = new Player(`Player ${number}`);
      number++;
    }
  }
}
