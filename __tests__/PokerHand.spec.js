import { PokerHand } from "../src/PokerHand";

describe("PokerHand", () => {
  it("is initialized with a new poker hand", () => {
    let hand = "AH KH QH JH 10H";
    let pokerhand = new PokerHand(hand);
    expect(pokerhand.hand).toEqual(hand);
  });
});
