const cardOrder = "23456789TJQKA";
export class PokerHand {
  constructor(hand) {
    this.hand = hand;
    const cards = this.hand.split(" ");
    const faces = cards
      .map(card => String.fromCharCode([77 - cardOrder.indexOf(card[0])]))
      .sort();
    const suits = cards.map(card => card[1]).sort();
    this.flush = suits[0] === suits[4];
    const lowStraight = faces.join("") === "AJKLM";
    faces[0] = lowStraight ? "N" : faces[0];
    const first = faces[0].charCodeAt(0);
    this.straight =
      lowStraight ||
      faces.every((f, index) => f.charCodeAt(0) - first === index);

    const counts = faces.reduce(function(acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    this.pairs = Object.values(counts).reduce(function(acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
  }
}
