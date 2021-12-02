import { Table } from "./table.js";
import { Lobby } from "./lobby.js";
import {
  shuffleDecks,
  dealHoleCards,
  dealBoardCards
} from "./dealerFunctions.js";
export class TexasHoldem {
  constructor(numOfPlayers) {
    const neededTables = numOfPlayers / 9;
    this.lobby = new Lobby(numOfPlayers);
    this.tables = Array.from(new Array(Math.ceil(neededTables)), () => "");
    this.createTables();
    this.populateTables();
  }

  dealRound() {
    let tables = this.tables;

    shuffleDecks(tables);
    dealHoleCards(tables);
    dealBoardCards(tables);

    for (let table in tables) {
      for (let players in tables[table].seats) {
        const player = tables[table].seats[players];
        player.hand = player.findBestTexasHoldemHand(tables[table].board);
      }
    }

    for (let table in tables) {
      tables[table].seats.sort(function(a, b) {
        if (a.hand.rank === b.hand.rank) {
          return a.hand.value > b.hand.value ? 1 : -1;
        }
        return a.hand.rank - b.hand.rank;
      });
    }

    let results = [];

    for (let table in tables) {
      results.push(tables[table].getWinnerTexasHoldem());
    }

    return results;
  }

  createTables() {
    let index = 1;
    for (let i in this.tables) {
      this.tables[i] = new Table(`Table ${index}`);
      index++;
    }
  }

  populateTables() {
    let index = 0;
    if (this.lobby.players.length > 8) {
      for (let player in this.lobby.players) {
        this.lobby.players[player];
        if (this.tables[index].seats.length > 8) {
          index++;
        }
        this.tables[index].seats.push(this.lobby.players[player]);
      }
      if (this.tables[this.tables.length - 1].seats.length < 4) {
        while (this.tables[this.tables.length - 1].seats.length < 4) {
          this.tables[this.tables.length - 1].seats.push(
            this.tables[this.tables.length - 2].seats.pop()
          );
        }
      }
    }
  }
}
