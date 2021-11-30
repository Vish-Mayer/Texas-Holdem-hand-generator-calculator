import { TexasHoldem } from "../src/game";
import { Deck } from "../src/deck";
jest.mock("../src/deck");

describe("Texas Holdem", () => {
  it("is initiated with a new deck", () => {
    new TexasHoldem();
    expect(Deck).toHaveBeenCalledTimes(1);
  });
});
