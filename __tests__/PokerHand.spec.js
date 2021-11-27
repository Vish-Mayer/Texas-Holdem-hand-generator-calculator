import { PokerHand } from "../src/PokerHand";

describe("PokerHand", () => {
  it("is initialized with a new poker hand", () => {
    let hand = "AH KH QH JH TH";
    let pokerhand = new PokerHand(hand);
    expect(pokerhand.hand).toEqual(hand);
  });

  describe("pokerhand.flush", () => {
    it("returns true if the hand contains a flush", () => {
      let testHands = [
        "AH KH QH JH TH",
        "AD KD QD JD TD",
        "AC KC QC JC TC",
        "AS KS QS JS TS"
      ];

      for (let hand in testHands) {
        let pokerhand = new PokerHand(testHands[hand]);
        expect(pokerhand.flush).toEqual(true);
      }
    });

    it("returns false if the hand does not contain a flush", () => {
      let hand = "AH KH QD JH TH";
      let pokerhand = new PokerHand(hand);
      expect(pokerhand.flush).toEqual(false);
    });
  });

  describe("pokerhand.straight", () => {
    it("returns true if the hand contains a straight, including a low straight(A - 5)", () => {
      let testHands = [
        "AH KH QH JH TH",
        "TH 8H 9H 6H 7H",
        "3H 2D 5S 6H 4C",
        "7D 9C 8S TD JD",
        "2H 3S 4D AH 5S"
      ];
      for (let hand in testHands) {
        let pokerhand = new PokerHand(testHands[hand]);
        expect(pokerhand.straight).toEqual(true);
      }
    });
  });
});
