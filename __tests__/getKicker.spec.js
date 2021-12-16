import { getKicker } from "../src/helpers/getKicker";

describe("getKicker", () => {
  it("converts the stringified values and returns them in regular format - Case 1", () => {
    expect(getKicker("ABCDE")).toEqual("A+K+Q+J+T");
  });

  it("converts the stringified values and returns them in regular format - Case 2", () => {
    expect(getKicker("BCDEF")).toEqual("K+Q+J+T+9");
  });

  it("converts the stringified values and returns them in regular format - Case 3", () => {
    expect(getKicker("CDEFG")).toEqual("Q+J+T+9+8");
  });

  it("converts the stringified values and returns them in regular format - Case 4 low straight", () => {
    expect(getKicker("JKLMN")).toEqual("5+4+3+2+A");
  });
});
