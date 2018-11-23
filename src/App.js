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

  render() {

    return (
      <div className="app">
        <Route exact path='/' 
          render={() => (
            <ListShelves books={this.state.books} />
          )} />

          <Route exact path='/search'
          render={() => (
            <Search booksOnShelves={this.state.books}/>
          )} />

     </div>      
    )
  }
}

export default BooksApp
