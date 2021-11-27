import { PokerHand } from "../src/PokerHand";

describe("PokerHand", () => {
  it("is initialized with a new poker hand", () => {
    let hand = "AH KH QH JH TH";
    let pokerhand = new PokerHand(hand);
    expect(pokerhand.hand).toEqual(hand);
  });

  describe("pokerhand.flush", () => {
    it("returns true if the hand contains a flush", () => {
      let hand = "AH KH QH JH TH";
      let pokerhand = new PokerHand(hand);
      expect(pokerhand.flush).toEqual(true);
    });

    it("returns false if the hand does not contain a flush", () => {
      let hand = "AH KH QD JH TH";
      let pokerhand = new PokerHand(hand);
      expect(pokerhand.flush).toEqual(false);
    });
  });

  describe("pokerhand.straight", () => {
    it("returns true if the hand contains a straight", () => {
      let hand = "AH KH QH JH TH";
      let pokerhand = new PokerHand(hand);
      expect(pokerhand.straight).toEqual(true);
    });

    it("returns true if the hand contains a straight", () => {
      let hand = "TH 8H 9H 6H 7H";
      let pokerhand = new PokerHand(hand);
      expect(pokerhand.straight).toEqual(true);
    });
  });
});
