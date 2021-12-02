export class Deck {
  constructor() {
    this.cards = [];
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
      "A"
    ];
    const suits = ["H", "D", "C", "S"];
    for (let i in faces) {
      for (let j in suits) {
        this.cards.push(faces[i] + suits[j]);
      }
    }
  }
  shuffle() {
    let cards = this.cards;
    let currentIndex = cards.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex],
        cards[currentIndex]
      ];
    }

    return cards;
  }

  dealCard() {
    return this.cards.pop();
  }
}
