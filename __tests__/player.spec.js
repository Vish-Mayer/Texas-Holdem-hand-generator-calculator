import { Player } from "../src/player";

describe("Player", () => {
  it("is initialized with a name", () => {
    const player = new Player("Player1");
    expect(player.name).toEqual("Player1");
  });

  it("is initialized with an empty hand", () => {
    let player = new Player("Player1");
    expect(player.holeCards.length).toEqual(0);
  });

  describe("compare", () => {
    it("returns the hands ranked highest to lowest - Case 1", () => {
      let player = new Player("Player1");
      let hands = [
        ["7D", "QH", "JH", "7D", "KH"],
        ["AH", "QH", "JH", "7D", "KH"],
        ["9H", "QH", "JH", "TH", "KH"],
        ["AH", "QH", "JH", "TH", "KH"]
      ];

      let rankedHands = [
        { rank: 1, rankDescription: "Royal Flush", value: "ABCDE" },
        { rank: 1, rankDescription: "Straight Flush", value: "BCDEF" },
        { rank: 8, rankDescription: "Pair", value: "HHBCD" },
        { rank: 9, rankDescription: "High Card", value: "ABCDH" }
      ];
      expect(player.compare(hands)).toEqual(rankedHands);
    });

    it("returns the hands ranked highest to lowest - Case 2", () => {
      let player = new Player("Player1");
      let hands = [
        ["7D", "7H", "7H", "8D", "7H"],
        ["QH", "QD", "JH", "QS", "QC"],
        ["TD", "TC", "5S", "TH", "KH"],
        ["3H", "3D", "3H", "3S", "KH"]
      ];

      let rankedHands = [
        { rank: 2, rankDescription: "Four Of A Kind", value: "CCCCD" },
        { rank: 2, rankDescription: "Four Of A Kind", value: "HHHHG" },
        { rank: 2, rankDescription: "Four Of A Kind", value: "LLLLB" },
        { rank: 6, rankDescription: "Three Of A Kind", value: "EEEBJ" }
      ];
      expect(player.compare(hands)).toEqual(rankedHands);
    });
  });

  describe("findBestTexasHoldemHand", () => {
    it("returns the best possible 5 cards using the board and hole cards", () => {
      let player = new Player("Player1");
      player.holeCards = ["AH", "KH"];
      let board = ["TH", "QH", "6D", "JH", "9H"];
      expect(player.findBestTexasHoldemHand(board)).toEqual({
        rank: 1,
        rankDescription: "Royal Flush",
        value: "ABCDE"
      });
    });
  });
});
