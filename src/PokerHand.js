const cardOrder = "23456789TJQKA";
export class PokerHand {
  constructor(hand) {
    this.hand = hand;
    const cards = this.hand.split(" ");
    const faces = cards.map(card =>
      String.fromCharCode([77 - cardOrder.indexOf(card[0])])
    );
    const suits = cards.map(card => card[1]).sort();
    this.flush = suits[0] === suits[4];
    const first = faces[0].charCodeAt(0);
    this.straight = faces.every(
      (f, index) => f.charCodeAt(0) - first === index
    );
  }
}
