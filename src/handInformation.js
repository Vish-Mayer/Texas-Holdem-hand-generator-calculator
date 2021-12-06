import { sortFaceValues } from "./helpers/sortFaceValue.js";
import { cardOrder } from "./helpers/cardOrder.js";
export const getHandInformation = hand => {
  const cards = hand.split(" ");
  if (cards.length < 5) {
    throw new Error("5 cards Required");
  }
  const faces = cards
    .map(card => String.fromCharCode([77 - cardOrder.indexOf(card[0])]))
    .sort();
  const suits = cards.map(card => card[1]).sort();
  const flush = suits[0] === suits[4];
  const lowStraight = faces.join("") === "AJKLM";
  faces[0] = lowStraight ? "N" : faces[0];
  const first = faces[0].charCodeAt(0);
  const straight =
    lowStraight || faces.every((f, index) => f.charCodeAt(0) - first === index);

  const counts = faces.reduce(function(acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  const pairs = Object.values(counts).reduce(function(acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  const value = sortFaceValues(counts);

  const rank =
    (straight && flush && 1) ||
    (flush && 4) ||
    (straight && 5) ||
    (pairs[4] && 2) ||
    (pairs[3] && pairs[2] && 3) ||
    (pairs[3] && 6) ||
    (pairs[2] > 1 && 7) ||
    (pairs[2] && 8) ||
    9;

  const rankDescription =
    (rank === 1 && value[0] === "A" && "Royal Flush") ||
    (rank === 1 && "Straight Flush") ||
    (rank === 2 && "Four Of A Kind") ||
    (rank === 3 && "Full House") ||
    (rank === 4 && "Flush") ||
    (rank === 5 && "Straight") ||
    (rank === 6 && "Three Of A Kind") ||
    (rank === 7 && "Two Pair") ||
    (rank === 8 && "Pair") ||
    (rank === 9 && "High Card");

  return {
    rank,
    rankDescription,
    value
  };
};
