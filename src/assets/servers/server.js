// use npm install to set server
// use node server.js on console to start server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/books').get((request, response) => {
  response.send(BOOKS);
});

app.route('/api/books').post((request, response) => {
  let books = request.body;

  const firstId = BOOKS ? Math.max.apply(null, BOOKS.map(booksIterator => booksIterator.id)) + 1 : 1;
  books.id = firstId;
  BOOKS.push(books);
  

  response.status(201).send(books);
});

app.route('/api/books/:id').put((request, response) => {
  const booksId = +request.params['id'];
  const books = request.body;

  const index = BOOKS.findIndex(booksIterator => booksIterator.id === booksId);
  BOOKS[index] = books;

  response.status(200).send(books);
});

app.route('/api/books/:id').get((request, response) => {
  const booksId = +request.params['id'];

  response.status(200).send(BOOKS.find(booksIterator => booksIterator.id === booksId));
});

app.route('/api/books/:id').delete((request, response)=> {
  const booksId = +request.params['id'];
  BOOKS = BOOKS.filter(booksIterator => booksIterator.id !== booksId);
  
  response.status(204).send({});
});

var BOOKS = [
    {
        id: 1,
        name: 'Book1',
        price: 24,
        quantity:1,
        category: 'action',
        img:'img1'
    },
    {
        id: 2,
        name: 'Book2',
        price: 30,
        quantity:1,
        category: 'action',
        img:'img2'

    },
    {
        id: 3,
        name: 'Book3',
        price: 50,
        quantity:1,
        category: 'action',
        img:'img3'
    },


];