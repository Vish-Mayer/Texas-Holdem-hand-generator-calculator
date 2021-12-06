import request from "supertest";
import app from "../src/app";

describe("/new-texas-holdem POST", () => {
  describe("when things go right", () => {
    it("returns a status of 200", async () => {
      const response = await request(app)
        .post("/new-texas-holdem")
        .send({
          players: 20
        });
      expect(response.statusCode).toEqual(200);
    });

    it("returns a status of 200, returns the results of each poker table", async () => {
      const response = await request(app)
        .post("/new-texas-holdem")
        .send({
          players: 9
        });
      expect(response.body.results).toBeDefined();
    });

    it("returns a game of 2 players if a post body is not passed", async () => {
      const response = await request(app)
        .post("/new-texas-holdem")
        .send({});
      expect(response.statusCode).toEqual(200);
      expect(response.body.results[0].seats.length).toEqual(2);
    });
  });

  describe("when things go wrong", () => {
    it("returns a 400 status if the amount of players inputed is not a valid integer", async () => {
      const response = await request(app)
        .post("/new-texas-holdem")
        .send({
          players: "not an interger"
        });
      expect(response.statusCode).toEqual(400);
      expect(response.body.msg).toEqual("Incorrect data type");
    });
  });
});
