import { getHandInformation } from "../src/handInformation";

describe("handInformation", () => {
  describe("royal flush", () => {
    it("returns a ranking of 1", () => {
      let testHands = ["AH KH QH JH TH", "AD KD QD JD TD"];

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 1
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Royal Flush"
        });
      }
    });
  });

  describe("straight flush", () => {
    it("returns a ranking of 1", () => {
      let testHands = ["9H KH QH JH TH", "TD 9D 8D 7D 6D"];

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 1
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Straight Flush"
        });
      }
    });
  });

  describe("four of a kind", () => {
    it("returns a ranking of 2", () => {
      let testHands = ["AH AD AC AS TH", "TH TD TC TS 6D"];

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 2
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Four Of A Kind"
        });
      }
    });
  });

  describe("full house", () => {
    it("returns a ranking of 3", () => {
      let testHands = ["7H 2C 7D 7S 2C", "TH TD TC 7S 7D"];

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 3
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Full House"
        });
      }
    });
  });

  describe("flush", () => {
    it("returns a ranking of 4", () => {
      let testHands = [
        "7H 2H 9H AH TH",
        "7D 2D 9D AD TD",
        "7C 2C 9C AC TC",
        "7S 2S 9S AS TS"
      ];

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 4
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Flush"
        });
      }
    });
  });

  describe("straight - including a low straight(A - 5)", () => {
    it("returns ranking of 5", () => {
      let testHands = ["AH KD QS JH TH", "TD 8C 9H 6S 7H", "2H 3S 4D AH 5S"];
      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 5
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Straight"
        });
      }
    });
  });

  describe("three of a kind", () => {
    it("returns a ranking of 6", () => {
      let testHands = ["AH KD AS JH AH", "TD 8C TH TS 7H"];
      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 6
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Three Of A Kind"
        });
      }
    });
  });

  describe("two pair", () => {
    it("returns a ranking of 7", () => {
      let testHands = ["AH KD AS JH KH", "TD 8C TH 7S 7H", "3H 3D 6S 6H 4C"];
      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 7
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Two Pair"
        });
      }
    });
  });

  describe("pair", () => {
    it("returns a ranking of 8", () => {
      let testHands = ["AH KD AS JH TH", "TD 8C 9H 7S 7H", "8H 3D 6S 6H 4C"];
      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 8
        });
      }

      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "Pair"
        });
      }
    });
  });

  describe("high card", () => {
    it("returns a ranking of 9", () => {
      let testHands = ["AH 9D 7S JH TH", "TD 8C 9H 3S 7H", "8H 3D 6S QH 4C"];
      for (let hand in testHands) {
        expect(getHandInformation(testHands[hand])).toMatchObject({
          rank: 9
        });

        expect(getHandInformation(testHands[hand])).toMatchObject({
          rankDescription: "High Card"
        });
      }
    });
  });

  describe("value", () => {
    it("returns the stringified face values - sorted by pairs, followed by lowest(A) - highest(2)", () => {
      let hand1 = "AH 2C AD AS AC";
      let hand2 = "TH 2C 2D AS 3C";
      expect(getHandInformation(hand1)).toMatchObject({
        value: "AAAAM"
      });
      expect(getHandInformation(hand2)).toMatchObject({
        value: "MMAEL"
      });
    });
  });
});
