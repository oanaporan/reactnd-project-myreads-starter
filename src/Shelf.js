import React, { Component } from 'react'

import Book from './Book'

class Shelf extends Component {
    state = {
    }

    render() {
        return(
            <div>
                  <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.shelf.books.map(book => (
                        <li key={book.id}>
                        <Book book={book} />
                        </li>
                        ))}
                    </ol>
                  </div>     
            </div>
        )
    }
}

export default Shelf;