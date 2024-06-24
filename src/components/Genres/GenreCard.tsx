import React from 'react';
import {Link} from 'react-router-dom';
import {Genre} from '../../types';
import './Genres.css';

interface Props {
  genre: Genre;
}

const GenreCard: React.FC<Props> = ({genre}) => {
  return (
    <div className="card p-2 mb-3 rounded-4 shadow-sm border-0" >
      <div className="card-body d-flex flex-column align-items-center text-center">
        <h5 className="card-title mb-3">{genre.title}</h5>
        <p className="card-text mb-4">{genre.description}</p>
        <Link to={genre.title.toLowerCase()} className="btn btn-secondary mt-auto" style={{maxWidth: '200px'}}>
          Произведения
        </Link>
      </div>
    </div>
  );
};

export default GenreCard;