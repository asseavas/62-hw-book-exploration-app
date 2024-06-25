import React from 'react';
import {Book} from '../../types';
import BookCard from './BookCard';

interface Props {
  books: Book[];
}

const Books: React.FC<Props> = ({books}) => {
  return (
    <>
      <div className="container books-container d-flex justify-content-between py-5 flex-wrap gap-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book}/>
        ))}
      </div>
    </>
  );
};

export default Books;