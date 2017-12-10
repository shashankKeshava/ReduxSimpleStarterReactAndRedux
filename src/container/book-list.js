import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li className="list-group-item" key={book.title}>
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

// Whenever state ever changes the container re-renders also component BookList will automatically re-render
export default connect(mapStateToProps)(BookList);
