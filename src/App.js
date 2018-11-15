import React from 'react'
import { Route} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books : [],
    newBook : false
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
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
            <Search />
          )} />

     </div>      
    )
  }
}

export default BooksApp
