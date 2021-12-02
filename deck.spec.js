import { Deck } from "../src/deck";
import { mockRandomForEach } from "jest-mock-random";

describe("Deck", () => {
  it("it contains 52 cards", () => {
    const deck = new Deck();
    expect(deck.cards.length).toEqual(52);
  });

  it("contains some sample cards", () => {
    let deck = new Deck();
    const sampleCards = [
      "AH",
      "KD",
      "QC",
      "JS",
      "TH",
      "9D",
      "8C",
      "7S",
      "6H",
      "5D",
      "4C",
      "3S",
      "2H"
    ];
    for (let card in sampleCards) {
      expect(deck.cards).toContain(sampleCards[card]);
    }
  });

  describe("dealCard", () => {
    it("deals the top card from the deck", () => {
      let deck = new Deck();
      deck.shuffle();
      let topCard = deck.cards[deck.cards.length - 1];
      expect(deck.dealCard()).toEqual(topCard);
      expect(deck).not.toContain(topCard);
    });
  });
});
