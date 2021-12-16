import { cardOrder } from "./cardOrder.js";

export const getKicker = value => {
  if (value === "JKLMN") {
    return "5432A".split("").join("+");
  } else {
    return value
      .split("")
      .map(val => cardOrder.split("").reverse()[val.charCodeAt(0) - 65])
      .join("+");
  }
};
