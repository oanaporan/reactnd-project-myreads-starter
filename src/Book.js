import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component {
    state ={}

    render() {
        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);
        const { authors, title } = this.props.book;
        
        return(
                <div className="book">
                    <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }}>
                            </div>
                        <ChangeShelf book={this.props.book} onChangeShelves={this.props.onChangeShelves}/>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                    </div>
        )
    }
}

export default Book;