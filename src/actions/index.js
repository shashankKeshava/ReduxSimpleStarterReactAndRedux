export function selectBook(book) {
    // Select Book is an action creator needs to return an action an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };
}
