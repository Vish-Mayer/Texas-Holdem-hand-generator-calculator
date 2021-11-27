export class PokerHand {
  constructor(hand) {
    this.hand = hand;
    const cards = this.hand.split(" ");
    const suits = cards.map(card => card[1]).sort();
    this.flush = suits[0] === suits[4];
  }
}
