const db = require("../database/dbConfig.js");
const request = require("supertest");
const User = require("./auth-model");
const server = require("./auth-router");
const jokes = require("../jokes/jokes-router");

describe("Users model", () => {
    beforeEach(async () => {
      
      await db("users").truncate();
    })});