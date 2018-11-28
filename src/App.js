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
    BooksAPI.update(book, shelf ).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
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
            <Search books={this.state.books} shelf={this.state.books.shelf} onChangeShelves={this.changeShelves}/>
          )} />

     </div>      
    )
  }
}

export default BooksApp
