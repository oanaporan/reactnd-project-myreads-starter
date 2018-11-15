import React, { Component } from 'react'
import Shelf from './Shelf'


class ListShelves extends Component {
    state = {}

    render() {
        return(
            <div className="list-books-content">
                <div className="bookshelf">
                <Shelf />
                </div>
            </div>
        )
    }
}

export default ListShelves;