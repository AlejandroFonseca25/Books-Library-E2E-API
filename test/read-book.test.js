const axios = require("axios");
const { expect, assert } = require("chai");
const { StatusCodes } = require("http-status-codes");

const url = "http://localhost:8081/books";

describe("Verifying the reading of books", () => {
  let quantityOfBooks;

  beforeEach(async () => {
    let responseGetBooks = await axios.get(url);
    quantityOfBooks = responseGetBooks.data.length;
  });

  describe("Unhappy path", () => {
    it("Reading non existent book", async () => {
      const response = await axios.get(url);
      expect(response.status).to.equal(StatusCodes.OK);
      expect("Herramientas para jardin").not.to.be.oneOf(
        response.data.map(function (x) {
          return x.name;
        })
      );
    });
  });

  describe("Happy path", () => {
    it("Read all books", async () => {
      const response = await axios.get(url);
      expect(response.status).to.equal(StatusCodes.OK);

      let responseGetBooks = await axios.get(url);
      expect(responseGetBooks.status).to.equal(StatusCodes.OK);
      const quantityOfBooksAfter = responseGetBooks.data.length;
      expect(quantityOfBooksAfter).to.equal(quantityOfBooks);
    });

    it("Find existent book on read", async () => {
      const response = await axios.get(url);
      expect(response.status).to.equal(StatusCodes.OK);

      expect(
        "Don't Make Me Think: A Common Sense Approach to Web Usability"
      ).to.be.oneOf(
        response.data.map(function (x) {
          return x.name;
        })
      );
      expect("Steve Krug").to.be.oneOf(
        response.data.map(function (x) {
          return x.author;
        })
      );
    });

    it("Find another existent book on read", async () => {
      const response = await axios.get(url);
      expect(response.status).to.equal(StatusCodes.OK);

      expect(
        "Head First Design Patterns: A Brain-Friendly Guide"
      ).to.be.oneOf(
        response.data.map(function (x) {
          return x.name;
        })
      );
      expect("Eric Freeman, Elizabeth Robson, Kathy Sierra, and Bert Bales").to.be.oneOf(
        response.data.map(function (x) {
          return x.author;
        })
      );
    });
  });
});
