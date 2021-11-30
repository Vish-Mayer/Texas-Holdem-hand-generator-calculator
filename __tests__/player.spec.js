import { Player } from "../src/player";

describe("Player", () => {
  it("is initialized with a name", () => {
    const player = new Player("Player1");
    expect(player.name).toEqual("Player1");
  });

  it("is initialized with an empty hand", () => {
    let player = new Player("Player1");
    expect(player.hole.length).toEqual(0);
  });

  describe("compare", () => {
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
});
