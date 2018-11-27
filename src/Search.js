import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'

import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {
    state = {
      query: '',
      searchResults: []
    }

    updateQuery = (query) => {
      this.setState({ query: query}, this.searchBooks);
    }

   searchBooks = () => {
     //Don't search on empty query && undefined 
     if (this.state.query === '' || this.state.query === undefined) {
       this.setState({ searchResults:[]});
     }
     BooksAPI.search(this.state.query.trim()).then(response => {
       if(response.error) {
          this.setState({ searchResults: [] });
       } else {
         response.forEach(books => {
           let list = this.props.books.filter(l => l.id === books.id);
           if (list[0]) {
             books.shelf = list[0].shelf
           };
         })
         this.setState({ searchResults: response.sort(sortBy('title')) })
       }
     });
   }




    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchResults.map(book => (
                        <li key={book.id}>
                        <Book book={book} onChangeShelves={this.props.onChangeShelves}/>
                        </li>
                        ))}
              </ol>
            </div>
          </div>
        )
    }
  }




export default Search