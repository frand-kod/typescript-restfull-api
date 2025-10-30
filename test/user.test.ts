/**
 * Test Scenario
 * every user should be username, name and password
 * you can see in test-util
 *
 */
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logger";
import { UserTest } from "./test-util";

describe("user Registration ", () => {
  //hapus username 'test' dahulu

  afterEach(async () => {
    await UserTest.delete();
  });

  test("should reject new user registration while request field is blank", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });
    logger.error(response.body);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  test("should accept new user registration while valid", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "test",
      password: "1234",
      name: "test",
    });
    logger.info(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
  });
});

describe("User Login", function () {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await UserTest.delete();
  });
  test("User able to login while is valid", async function () {
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "test",
    });
    logger.info(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
    expect(response.body.data.token).toBeDefined();
    expect(response.body.data.password).toBeUndefined();
  });

  test("User reject to login while field is blank", async function () {
    const response = await supertest(web).post("/api/users/login").send({
      username: "",
      password: "",
    });
    logger.info(response.body);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  test("User reject to login while password is wrong", async function () {
    const response = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "salah",
    });
    logger.info(response.body);
    expect(response.status).toBe(401);
    expect(response.body.error).toBeDefined();
  });
});

describe("User After Login", function () {
  beforeEach(async () => {
    await UserTest.create();
  });

  afterEach(async () => {
    await UserTest.delete();
  });
  test("should be able to get users", async function () {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("X-API-TOKEN", "test");

    logger.info(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
  });

  test("should be rejected to get users while token is invalid", async function () {
    const response = await supertest(web)
      .get("/api/users/current")
      .set("X-API-TOKEN", "salah");

    logger.info(response.body);
    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe("test");
    expect(response.body.data.name).toBe("test");
  });
});
