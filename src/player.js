import { getHandInformation } from "./handInformation";
import { get } from "https";
import { homedir } from "os";

export class Player {
  constructor(name) {
    this.name = name;
    this.hole = [];
  }

  compare(hands) {
    return hands
      .map(hand => getHandInformation(hand.join(" ")))
      .sort(function(a, b) {
        if (a.rank === b.rank) {
          return a.value > b.value ? 1 : -1;
        }
        return a.rank - b.rank;
      });
  }
}
