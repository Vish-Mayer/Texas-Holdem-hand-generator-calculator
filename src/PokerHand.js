const cardOrder = "23456789TJQKA";
export class PokerHand {
  constructor(hand) {
    this.hand = hand;
    const cards = this.hand.split(" ");
    const faces = cards
      .map(card => String.fromCharCode([77 - cardOrder.indexOf(card[0])]))
      .sort();
    const suits = cards.map(card => card[1]).sort();
    this.flush = suits[0] === suits[4];
    const lowStraight = faces.join("") === "AJKLM";
    faces[0] = lowStraight ? "N" : faces[0];
    const first = faces[0].charCodeAt(0);
    this.straight =
      lowStraight ||
      faces.every((f, index) => f.charCodeAt(0) - first === index);

    const counts = faces.reduce(function(acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    this.pairs = Object.values(counts).reduce(function(acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    this.value = this.sortValues(counts);
  }

  sortValues(counts) {
    let sortable = [];
    let sortedValue = [];

    for (let i in counts) {
      sortable.push([i, counts[i]]);
    }

    sortable.sort(function(a, b) {
      let countDiff = b[1] - a[1];
      if (countDiff) return countDiff;
      return b > a ? -1 : b === a ? 0 : 1;
    });

    for (let i in sortable) {
      let count = sortable[i][1];
      while (count > 0) {
        sortedValue.push(sortable[i][0]);
        count--;
      }
    }
    return sortedValue.join("");
  }
}
