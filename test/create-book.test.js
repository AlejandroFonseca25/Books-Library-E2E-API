const axios = require("axios");
const { expect, assert } = require("chai");
const { StatusCodes } = require("http-status-codes");

const url = "http://localhost:8081/books";

describe("Verifying the creation of a book", () => {
  let quantityOfBooks;

  beforeEach(async () => {
    let responseGetBooks = await axios.get(url);
    quantityOfBooks = responseGetBooks.data.length;
  });

  describe("Unhappy path", () => {
    it("BUG: Create book with no title", async () => {
      let book = {
        id: "229f2c3b-facf-4d56-bb2b-175317ad0486",
        name: "",
        author: "Alejandro Fonseca",
      };

      const response = await axios.post(url, book);
      expect(response.status).to.equal(StatusCodes.BAD_REQUEST);

      let responseGetBooks = await axios.get(url);
      expect(responseGetBooks.status).to.equal(StatusCodes.OK);
      const quantityOfBooksAfter = responseGetBooks.data.length;
      expect(quantityOfBooksAfter).to.equal(quantityOfBooks);
    });

    it("BUG: Create book with no author", async () => {
      let book = {
        id: "229f2c3b-facf-4d56-bb2b-175317ad0487",
        name: "Testing para dummies",
        author: "",
      };
      const response = await axios.post(url, book);
      expect(response.status).to.equal(StatusCodes.BAD_REQUEST);

      let responseGetBooks = await axios.get(url);
      expect(responseGetBooks.status).to.equal(StatusCodes.OK);
      const quantityOfBooksAfter = responseGetBooks.data.length;
      expect(quantityOfBooksAfter).to.equal(quantityOfBooks);
    });

    it("BUG: Create book with no title and author", async () => {
      let book = {
        id: "229f2c3b-facf-4d56-bb2b-175317ad0488",
        name: "",
        author: "",
      };
      const response = await axios.post(url, book);
      expect(response.status).to.equal(StatusCodes.BAD_REQUEST);

      let responseGetBooks = await axios.get(url);
      expect(responseQuantityOfBooks.status).to.equal(StatusCodes.OK);
      const quantityOfBooksAfter = responseGetBooks.data.length;
      expect(quantityOfBooksAfter).to.equal(quantityOfBooks);
    });
  });

  describe("Happy path", () => {
    let newBook;

    it("Create book", async () => {
      let book = {
        id: "229f2c3b-facf-4d56-bb2b-175317ad0489",
        name: "El extraño mundo de Jack",
        author: "Tim Burton",
      };
      const response = await axios.post(url, book);
      newBook = response.data;
      expect(response.status).to.equal(StatusCodes.OK);

      let responseGetBooks = await axios.get(url);
      expect(responseGetBooks.status).to.equal(StatusCodes.OK);
      const quantityOfBooksAfter = responseGetBooks.data.length;
      expect(quantityOfBooksAfter).to.equal(quantityOfBooks + 1);
      
      expect(
        book.name
      ).to.be.oneOf(
        responseGetBooks.data.map(function (x) {
          return x.name;
        })
      );
      expect(book.author).to.be.oneOf(
        responseGetBooks.data.map(function (x) {
          return x.author;
        })
      );
    });

    after(async()=>{
        await axios.delete(url+'/'+newBook.id);
    })
  });
});
