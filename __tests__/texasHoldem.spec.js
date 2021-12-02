import { TexasHoldem } from "../src/texasHoldem";

describe("TexasHoldem", () => {
  it("is initialized with a new lobby", () => {
    const game = new TexasHoldem(10);
    expect(game.lobby.players.length).toEqual(10);
  });

  it("allows 2 players on a tab;e", () => {
    const game = new TexasHoldem(2);
    expect(game.tables.length).toEqual(1);
  });

  it("creates tables for for the amount of players, each table can have 9 players", () => {
    const game = new TexasHoldem(18);
    expect(game.tables.length).toEqual(2);
  });

  it("if the last table created has less then 5 players, game takes players from the previous table to populate the last table", () => {
    const game = new TexasHoldem(19);
    expect(game.tables.length).toEqual(3);
    expect(game.tables[2].seats.length).toEqual(4);
    expect(game.tables[1].seats.length).toEqual(6);
    expect(game.tables[0].seats.length).toEqual(9);
  });

  describe("dealRound", () => {
    it("deals out hole cards for each player on every table", () => {
      const game = new TexasHoldem(20);
      game.dealRound();
      for (let table in game.tables) {
        for (let player in game.tables[table].seats) {
          expect(game.tables[table].seats[player].holeCards.length).toEqual(2);
        }
      }
    });

    it("deals out 5 board cards for every table table", () => {
      const game = new TexasHoldem(20);
      game.dealRound();
      for (let table in game.tables) {
        expect(game.tables[table].board.length).toEqual(5);
      }
    });

    it("returns the winner for each table", () => {
      const game = new TexasHoldem(20);
      expect(game.dealRound()[0].winner).toBeDefined();
      expect(game.dealRound()[1].winner).toBeDefined();
      expect(game.dealRound()[2].winner).toBeDefined();
    });
  });
});
