import request from "supertest";
import app from "../src/app";

describe("/newTexasHoldemGame", () => {
  describe("when things go right", () => {
    it("returns a status of 200", async () => {
      const response = await request(app)
        .post("/newTexasHoldemGame")
        .send({
          newTexasHoldemGame: 20
        });
      expect(response.statusCode).toEqual(200);
    });
  });

  describe("when things go wrong", () => {});
});
