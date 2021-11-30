import { TexasHoldem } from "../src/game";
import { Deck } from "../src/deck";
import { Player } from "../src/player";
jest.mock("../src/deck");
jest.mock("../src/player");

beforeEach(() => {
  Player.mockClear();
});

describe("Texas Holdem", () => {
  it("is initiated with a new deck", () => {
    new TexasHoldem();
    expect(Deck).toHaveBeenCalledTimes(1);
  });

  it("it is initialized with a populated table of hardcoded players", () => {
    let game = new TexasHoldem(7);
    expect(game.table.length).toEqual(7);
    expect(Player).toHaveBeenCalledTimes(7);
  });
});
