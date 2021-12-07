import request from "supertest";
import app from "../src/app";

describe("/api/deal-texas-holdem GET", () => {
  describe("when things go right", () => {
    it("returns a status of 200", async () => {
      const response = await request(app)
        .get("/api/deal-texas-holdem")
        .query({
          players: 20
        });
      expect(response.statusCode).toEqual(200);
    });

    it("returns a status of 200, returns the results of each poker table", async () => {
      const response = await request(app)
        .get("/api/deal-texas-holdem")
        .query({
          players: 9
        });
      expect(response.body).toBeDefined();
    });

    it("returns a hand dealt to 1 player if a players param is not passed", async () => {
      const response = await request(app)
        .get("/api/deal-texas-holdem")
        .send({});
      expect(response.statusCode).toEqual(200);
      expect(response.body.results[0].seats.length).toEqual(1);
    });
  });

  describe("when things go wrong", () => {
    it("returns a 400 status if the amount of players inputed is not a valid integer", async () => {
      const response = await request(app)
        .get("/api/deal-texas-holdem")
        .query({
          players: "not an interger"
        });
      expect(response.statusCode).toEqual(400);
      expect(response.body.msg).toEqual("Incorrect data type");
    });
  });
});
