import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component {
    state ={}

    render() {
        let { authors, imageLinks, title } = this.props.book;
        return(
                <div className="book">
                    <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageLinks.thumbnail }}>
                            </div>
                        <ChangeShelf />
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
        )
    }
}

export default Book;