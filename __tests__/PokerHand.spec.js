import { HandInformation } from "../src/HandInformation";

describe("HandInformation", () => {
  it("is initialized with a new poker hand", () => {
    let hand = "AH KH QH JH TH";
    let subject = new HandInformation(hand);
    expect(subject.hand).toEqual(hand);
  });

  describe("subject.flush", () => {
    it("returns true if the hand contains a flush", () => {
      let testHands = [
        "AH KH QH JH TH",
        "AD KD QD JD TD",
        "AC KC QC JC TC",
        "AS KS QS JS TS"
      ];

      for (let hand in testHands) {
        let subject = new HandInformation(testHands[hand]);
        expect(subject.flush).toEqual(true);
      }
    });

    it("returns false if the hand does not contain a flush", () => {
      let hand = "AH KH QD JH TH";
      let subject = new HandInformation(hand);
      expect(subject.flush).toEqual(false);
    });
  });

  describe("subject.straight", () => {
    it("returns true if the hand contains a straight, including a low straight(A - 5)", () => {
      let testHands = [
        "AH KH QH JH TH",
        "TH 8H 9H 6H 7H",
        "3H 2D 5S 6H 4C",
        "7D 9C 8S TD JD",
        "2H 3S 4D AH 5S"
      ];
      for (let hand in testHands) {
        let subject = new HandInformation(testHands[hand]);
        expect(subject.straight).toEqual(true);
      }
    });
  });

  describe("subject.straight", () => {
    it("returns the amount of occurences of a face in a hand. Case -  4 of a kind", () => {
      let hand = new HandInformation("7H 7C 7D 7S AC");
      expect(hand.pairs[4]).toEqual(1);
    });

    it("returns the amount of occurences of a face in a hand. Case - full house", () => {
      let hand = new HandInformation("7H 2C 7D 7S 2C");
      expect(hand.pairs[3]).toEqual(1);
      expect(hand.pairs[2]).toEqual(1);
    });

    it("returns the amount of occurences of a face in a hand. Case 3 of a kind", () => {
      let hand = new HandInformation("7H 2C 7D 7S AC");
      expect(hand.pairs[3]).toEqual(1);
    });

    it("returns the amount of occurences of a face in a hand. Case 2 pair", () => {
      let hand = new HandInformation("7H 2C 7D 2S AC");
      expect(hand.pairs[2]).toEqual(2);
    });

    it("returns the amount of occurences of a face in a hand. Case - pair", () => {
      let hand = new HandInformation("7H 2C 7D 9S AC");
      expect(hand.pairs[2]).toEqual(1);
    });
  });

  describe("value", () => {
    it("returns the stringified face values - sorted by pairs, followed by lowest(A) - highest(2)", () => {
      let hand1 = new HandInformation("AH 2C AD AS AC");
      let hand2 = new HandInformation("TH 2C 2D AS 3C");
      console.log(hand1);
      expect(hand1.value).toEqual("AAAAM");
      expect(hand2.value).toEqual("MMAEL");
    });
  });
});
