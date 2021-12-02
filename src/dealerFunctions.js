export const shuffleDecks = tables => {
  for (let table in tables) {
    tables[table].deck.shuffle();
  }
};

export const dealHoleCards = tables => {
  for (let table in tables) {
    for (let players in tables[table].seats) {
      const player = tables[table].seats[players];
      player.holeCards.push(tables[table].deck.dealCard());
    }
  }

  for (let table in tables) {
    for (let players in tables[table].seats) {
      const player = tables[table].seats[players];
      player.holeCards.push(tables[table].deck.dealCard());
    }
  }
};

export const dealBoardCards = tables => {
  for (let table in tables) {
    tables[table].deck.dealCard(); //burn card
  }

  for (let table in tables) {
    tables[table].board.push(tables[table].deck.dealCard());
  }
  for (let table in tables) {
    tables[table].board.push(tables[table].deck.dealCard());
  }
  for (let table in tables) {
    tables[table].board.push(tables[table].deck.dealCard());
  }

  for (let table in tables) {
    tables[table].deck.dealCard(); //burn card
  }

  for (let table in tables) {
    tables[table].board.push(tables[table].deck.dealCard());
  }

  for (let table in tables) {
    tables[table].deck.dealCard(); //burn card
  }

  for (let table in tables) {
    tables[table].board.push(tables[table].deck.dealCard());
  }
};
