import React, { Component } from 'react'
import Shelf from './Shelf'


class ListShelves extends Component {
    state = {}

    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div className="bookshelf">
                <Shelf />
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