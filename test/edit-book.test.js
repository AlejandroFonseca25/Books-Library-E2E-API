const axios = require('axios');
const { expect, assert } = require('chai');
const { StatusCodes } = require('http-status-codes');

const url = 'http://localhost:8081/books';

describe('Verifying the update of a book', () => {
    let newBook;
    
    beforeEach(async () => {
        let book = {
            id: '229f2c3b-facf-4d56-bb2b-175317ad0486',
            name: 'El mapa de los anhelos',
            author: 'Alice Kellen'
        };
        let response= await axios.post(url, book);
        newBook = response.data;

    });

    describe('Unhappy path', () => {

        it('BUG: should not update a book with the name empty', async () => {
            let bookUpdated = {
                name: 'El mapa de los besos',
                author: ''
            }

            const response = await axios.put(url+'/'+newBook.id, bookUpdated);          
            expect(response.status).to.equal(StatusCodes.BAD_REQUEST);

        });

        it('BUG: should not update a book with the author empty', async () => {
            let bookUpdated = {
                name: '',
                author: 'Alice Swift'
            }

            const response = await axios.put(url+'/'+newBook.id, bookUpdated);          
            expect(response.status).to.equal(StatusCodes.BAD_REQUEST);

        });

        afterEach(async () => {
            await axios.delete(url+'/'+newBook.id);
        });

    });

    describe('Happy path', () => {

        it('should  update the name and the author of a book ', async () => {
            let data = {
                name: 'El mapa de los besos',
                author: 'Alice Swift'
            }

            const response = await axios.put(url+'/'+newBook.id, data);          
            expect(response.status).to.equal(StatusCodes.OK);
            expect(response.data.name).to.equal(data.name);
            expect(response.data.author).to.equal(data.author);

        });

        it('should  update the name of a book ', async () => {
            let data = {
                name: 'El mapa de los besos',
                author: newBook.author
            }

            const response = await axios.put(url+'/'+newBook.id, data);          
            expect(response.status).to.equal(StatusCodes.OK);
            expect(response.data.name).to.equal(data.name);
            expect(response.data.author).to.equal(newBook.author);

        });

        it('should  update the author of a book ', async () => {
            let data = {
                name: newBook.name,
                author: 'Alice Swift'
            }

            const response = await axios.put(url+'/'+newBook.id, data);          
            expect(response.status).to.equal(StatusCodes.OK);
            expect(response.data.name).to.equal(newBook.name);
            expect(response.data.author).to.equal(data.author);

        });

        afterEach(async () => {
            await axios.delete(url+'/'+newBook.id);
        });

    });
});