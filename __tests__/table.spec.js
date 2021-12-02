import { Table } from "../src/table";
import { Deck } from "../src/deck";

jest.mock("../src/deck");

beforeEach(() => {
  Deck.mockClear();
});

describe("Table", () => {
  it("is initalized with a name", () => {
    const table = new Table("name");
    expect(table.name).toEqual("name");
  });

  it("is initalized with a new Deck object", () => {
    new Table("name");
    expect(Deck).toHaveBeenCalledTimes(1);
  });

  describe("board", () => {
    it("is initalized with an empty board", () => {
      const table = new Table("name");
      expect(table.board.length).toEqual(0);
    });
  });

  describe("board", () => {
    it("is initalized with empty seats for players", () => {
      const table = new Table("name");
      expect(table.seats.length).toEqual(0);
    });
  });

  describe("getWinner", () => {
    it("returns a winner for the table", () => {
      const table = new Table("name");
      table.seats.push({ rank: 1, value: "ABCDE" });
      expect(table.getWinner()).toBeTruthy();
    });
  });
});
