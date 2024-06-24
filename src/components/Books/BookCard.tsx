import React from 'react';
import {Book} from '../../types';
import './Books.css';

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({book}) => {
  const imageStyle = {
    background: `url(${book.image}) no-repeat center center / contain`,
    width: '100%',
    height: '130px',
  };

  return (
    <div className="book-card card rounded-4 shadow-sm border-0 p-4">
      <div className="rounded" style={imageStyle} />
      <div className="card-body text-center d-flex flex-column align-items-center">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p className="card-text text-secondary mt-auto">{book.year}</p>
      </div>
    </div>
  );
};

export default BookCard;