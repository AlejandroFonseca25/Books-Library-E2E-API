const axios = require('axios');
const { expect, assert } = require('chai');
const { StatusCodes } = require('http-status-codes');

const url = 'http://localhost:8080/books';

describe('Verifying the deletion of a book', () => {

    let quantityOfBooks;
    let newBook;
    
    beforeEach(async () => {
        let book = {
            id: '229f2c3b-facf-4d56-bb2b-175317ad0486',
            name: 'El mapa de los anhelos',
            author: 'Alice Kellen'
        };
        let response= await axios.post(url, book);
        newBook = response.data;
        let responseGetBooks = await axios.get(url);
        quantityOfBooks = responseGetBooks.data.length;

    });

    it('BUG: should not delete any book were delete already', async () => {
        const response = await axios.delete(url+'/'+newBook.id);
        expect(response.status).to.equal(StatusCodes.OK);

        const responseDeleteAgain = await axios.delete(url+'/'+newBook.id);
        expect(responseDeleteAgain.status).to.equal(StatusCodes.BAD_REQUEST);

        const responseQuantityOfBooks = await axios.get(url);
        expect(responseQuantityOfBooks.status).to.equal(StatusCodes.OK);
        let quantityOfBooksAfterDelete = responseQuantityOfBooks.data.length;

        expect(quantityOfBooksAfterDelete).to.equal(quantityOfBooks-1);
    });

    it('should delete a book ', async () => {
        const response = await axios.delete(url+'/'+newBook.id);
        expect(response.status).to.equal(StatusCodes.OK);

        const responseQuantityOfBooks = await axios.get(url);
        expect(responseQuantityOfBooks.status).to.equal(StatusCodes.OK);
        let quantityOfBooksAfterDelete = responseQuantityOfBooks.data.length;

        expect(quantityOfBooksAfterDelete).to.equal(quantityOfBooks-1);
    });
});