import { Player } from "../src/player";

describe("Player", () => {
  it("is initialized with a name", () => {
    let player = new Player("Player1");
    expect(player.name).toEqual("Player1");
  });

  it("is initialized with an empty hand", () => {
    let player = new Player("Player1");
    expect(player.hole.length).toEqual(0);
  });
});
