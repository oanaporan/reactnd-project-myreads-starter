import React, { Component } from 'react'


class ChangeShelf extends Component {
    state = {
        shelfSelected: this.props.book.shelf || "none"
    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select 
                value={this.state.shelfSelected}
                onChange={(el) => this.props.onChangeShelves(this.props.book, el.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf;