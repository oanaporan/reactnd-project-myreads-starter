import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

import Shelf from './Shelf'


class ListShelves extends Component {
    state = {
        books: []
    }

    updateShelves = () => {
        const newCurrentlyReading = {
            name: "Currently Reading",
            books: this.props.books.filter(book => book.shelf === 'currentlyReading')
        }
        const newWantToRead = {
            name: "Want To Read",
            books: this.props.books.filter(book => book.shelf === 'wantToRead')
        }
        const newRead = {
            name: "Read",
            books: this.props.books.filter(book => book.title === 'read')
        }
        return ([newCurrentlyReading, newWantToRead, newRead]);

    }

    changeShelves = (book, shelf) => {
        BooksAPI.update(book, shelf).then(response => {
            //Make a copy of the list of books on shelves
            let booksOnShelves = this.props.books.slice(0);
            //Check if the selected book is already in array
            const selectedBooks = booksOnShelves.filter(bookOnShelves => bookOnShelves.id === book.id);
            //If the book is on shelf update it
            if(selectedBooks.length) {
                selectedBooks[0].shelf = shelf;
            } else {
                //Add the new book to the selected shelf
                booksOnShelves.push(book);
            }
            //set state with the new array of books
            this.setState({ books: booksOnShelves })
        })
    }

    render() {

        let shelves = [];
        shelves = this.updateShelves();

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div className="bookshelf">
                {shelves && shelves.map((shelf) => (
                    <Shelf key={shelf.name} shelf={shelf} onChangeShelves={this.changeShelves}
                    />))}
                </div>
            </div>
            <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>
          </div>
          
        )
    }
}

export default ListShelves;