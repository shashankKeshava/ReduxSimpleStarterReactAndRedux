import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item"
                    key={book.title}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
    }
}

function mapStateToProps(state) {
    // Whatever is returned from here will shows as props of BookList
    return {
        books: state.books,
    };
}

// Any thing returned from this function will end up as props on BookList Container
function mapDispatchToProps(dispatch) {
    /* 
    Whenever Select Book is called result should be passed to all Reducers
    Dispatcher: Takes all the result of action creators and spits to Reducers
 */
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/* 
Whenever state ever changes the container re-renders also component BookList will automatically 
re-render.  Promote Book List from Component to Container - its needs to know about this new 
dispatch method, selectBook. Make it available as Props
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
