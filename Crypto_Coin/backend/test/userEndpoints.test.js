require("dotenv").config();
const app = require("../app");
const jwt = require("jsonwebtoken");
const mockServer = require("supertest");
// const { MongoMemoryServer } = require("mongodb-memory-server");
const User = require("../model/user");
const { startDb, stopDb, deleteAll } = require("./util/inMemoryDb");

describe("requests to /api/user/", () => {
  let connection;
  let server;
  let client;

  beforeAll(async () => {
    const result = await startDb();
    connection = result[0];
    server = result[1];
    client = mockServer.agent(app);
  });

  afterEach(async () => {
    await deleteAll(User);
  });

  afterAll(async () => {
    await stopDb(connection, server);
  });

  test("add-to-mycoin", async () => {
    // given
    // const johnDoe = new User({
    //   username: "johnDoe"
    // });
    // await johnDoe.save();

    const id = "1";
    const name = "Bitcoin";
    const user = "johnDoe";

    // can be multiple client.set();

    // when
    const response = await client
      .post("/api/user/add-to-mycoin")
      .send({ id, name, user });

    // then
    expect(response.status).toBe(201);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("add-transaction", async () => {
    // given
    const quantity = 1;
    const pricePerCoin = 2;
    const fee = 3;
    const buyDate = "2022-02-02";
    const coinId = "1";
    const user = "johnDoe";

    // can be multiple client.set();

    // when
    const response = await client
      .post("/api/user/add-transaction")
      .send({ quantity, pricePerCoin, fee, buyDate, user, coinId });

    // then
    expect(response.status).toBe(201);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("get-transaction No data", async () => {
    // given
    const coinId = "1";
    const userId = "23839823";

    // when
    const response = await client
      .post("/api/user/get-transaction")
      .send({ coinId, userId });

    // then
    expect(response.status).toBe(404);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("create", async () => {
    // given
    const username = 1;
    const providers = "google";

    // when
    const response = await client
      .post("/api/user/create")
      .send({ username, providers });

    // then
    expect(response.status).toBe(401);
  });

  test("form_register", async () => {
    // given
    const username = "Jani";
    const password = "12344";
    const cpassword = "12344";

    // can be multiple client.set();

    // when
    const response = await client
      .post("/api/user/form_register")
      .send({ username, password, cpassword });

    // then
    expect(response.status).toBe(201);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("form_login user not registered", async () => {
    // given
    const username = "Jani";
    const password = "12344";

    // can be multiple client.set();

    // when
    const response = await client
      .post("/api/user/form_login")
      .send({ username, password });

    // then
    expect(response.status).toBe(400);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("remove-from-mycoin coin already removed", async () => {
    // given
    const id = "1";
    const user = "johnDoe";

    // when
    const response = await client
      .post("/api/user/remove-from-mycoin")
      .send({ id, user });

    // then
    expect(response.status).toBe(422);
    // const responseData = response.body;
    // expect(responseData.user.dashboards).toStrictEqual([]);
    // const userDb = User.find()
    // expect(userDb.coins.length).toBe(1)
  });

  test("get-saved no saved profile", async () => {
    // given
    const user = "johnDoe";

    // when
    const response = await client.post("/api/user/get-saved").send({ user });

    // then
    expect(response.status).toBe(404);
  });

  test("save-profile Not saved", async () => {
    // given
    const user = { userId: "23423" };
    const firstName = "Jon";
    const lastName = "Doe";
    const birdthDate = "1900-09-09";
    const country = "Budapest";

    // when
    const response = await client
      .post("/api/user/save-profile")
      .send({ firstName, lastName, birdthDate, country, user });

    // then
    expect(response.status).toBe(400);
  });
  
  test("get-profile-data", async () => {
    // given
    const user = { userId: "23423" };

    // when
    const response = await client
      .post("/api/user/get-profile-data")
      .send({ user });

    // then
    expect(response.status).toBe(200);
  });

  //   test("deleted user returns null object", async () => {
  //     // given
  //     const johnDoe = new User({
  //       username: "johnDoe",
  //     });
  //     await johnDoe.save();
  //     const token = jwt.sign({ userId: johnDoe._id }, process.env.SECRET_KEY);

  //     await User.deleteMany();

  //     client.set("authorization", token);

  //     // when
  //     const response = await client.get("/api/dashboards");

  //     // then
  //     expect(response.status).toBe(200);
  //     expect(response.body).toStrictEqual({ user: null });
  //   });
});
