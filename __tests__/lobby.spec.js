import { Lobby } from "../src/lobby";
import { Player } from "../src/player";
jest.mock("../src/player");

describe("Lobby", () => {
  it("is initalized with a number of players", () => {
    const lobby = new Lobby(20);
    expect(lobby.players.length).toEqual(20);
    expect(Player).toHaveBeenCalledTimes(20);
  });
});
