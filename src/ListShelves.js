import React, { Component } from 'react'

import Shelf from './Shelf'


class ListShelves extends Component {
    state = {
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
                    <Shelf key={shelf.name} shelf={shelf} 
                    />))}
                </div>
            </div>
            <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
          </div>
          
        )
    }
}

export default ListShelves;