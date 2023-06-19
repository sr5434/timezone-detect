const request = require("supertest");
const baseURL = "http://localhost:8080";

describe("POST /coords_to_tz", () => {
  it("should return correct timezone, test 1", async () => {
    const coords = { lat: 44.140624, long: -73.958437 };
    const response = await request(baseURL).post("/coords_to_tz").send(coords);
    expect(response.body["timezone"][0]).toBe("America/New_York");
  });
  it("should return correct timezone, test 2", async () => {
    const coords2 = { lat: 40.372834, long: -121.75733 };
    const response2 = await request(baseURL)
      .post("/coords_to_tz")
      .send(coords2);
    expect(response2.body["timezone"][0]).toBe("America/Los_Angeles");
  });
  it("should return correct timezone, test 3", async () => {
    const coords3 = { lat: 45.124646, long: -79.677548 };
    const response3 = await request(baseURL)
      .post("/coords_to_tz")
      .send(coords3);
    expect(response3.body["timezone"][0]).toBe("America/Toronto");
  });
});
