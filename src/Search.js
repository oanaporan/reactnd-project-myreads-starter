import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {
    state = {
      query: '',
      books: []
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    }

    // updateSearch = () => {
    //   BooksAPI.search(this.state.query).then(response => {
    //     let listBooks = [];
    //     let newError = false;

    //     if (response === undefined || (response.error && response.error !== "empty query")) {
    //       newError: true;
    //     } else if (response.length) {
    //       listBooks = response.concat(this.props.booksOnShelves);
    //     }
    //     this.setState({ error: newError, books: listBooks});
    //   })
    // }

    // componentWillReceiveProps = (props) => {
    //   this.props = props;
    //   let searchedBooks = this.updateSearch();
    //   this.setState({ books: searchedBooks })

    // }



    render() {
      // let showingBooks 
      // if (this.state.query) {
      //   const match = new RegExp(escapeRegExp(this.state.query), 'i') 
      //   showingBooks = this.state.books.filter((book) => match.test(book.title));

      // } else {
      //   showingBooks = this.state.books
      // }

      // showingBooks.sort(sortBy('title'))


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
              {this.props.books.map(book => (
                        <li key={book.id}>
                        <Book book={book} />
                        </li>
                        ))}
              </ol>
            </div>
          </div>
        )
    }
  }




export default Search