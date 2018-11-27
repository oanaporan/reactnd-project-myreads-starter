import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books : [],
    newBook : false
   
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
  })

  }


changeShelves = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
        //Make a copy of the list of books on shelves
        let booksOnShelves = this.state.books.slice(0);
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

    return (
      <div className="app">
        <Route exact path='/' 
          render={() => (
            <ListShelves books={this.state.books} onChangeShelves={this.changeShelves}/>
          )} />

          <Route exact path='/search'
          render={() => (
            <Search booksOnShelves={this.state.books} onChangeShelves={this.changeShelves}/>
          )} />

     </div>      
    )
  }
}

export default BooksApp
