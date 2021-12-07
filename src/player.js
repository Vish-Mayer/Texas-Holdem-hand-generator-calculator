import { getHandInformation } from "./handInformation.js";
export class Player {
  constructor(name) {
    this.name = name;
    this.holeCards = [];
  }

  compare(hands) {
    return hands
      .map(hand => getHandInformation(hand.join(" ")))
      .sort(function(a, b) {
        if (a.rank === b.rank) return a.value > b.value ? 1 : -1;
        return a.rank - b.rank;
      });
  }

  findBestTexasHoldemHand(board) {
    const hands = [];
    hands.push(board);
    for (let c = 0; c < 2; c += 1) {
      for (let b = 0; b < 5; b += 1) {
        const newHand = [...board];
        newHand[b] = this.holeCards[c];
        hands.push(newHand);
      }
    }
    for (let b = 0; b < 4; b += 1) {
      for (let r = b + 1; r < 5; r += 1) {
        const newHand = [...board];
        newHand[b] = this.holeCards[0];
        newHand[r] = this.holeCards[1];
        hands.push(newHand);
      }
    }
    return this.compare(hands)[0];
  }
}
