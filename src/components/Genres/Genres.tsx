import React from 'react';
import GenreCard from './GenreCard';
import {Genre} from '../../types';

interface Props {
  genres: Genre[];
}

const Genres: React.FC<Props> = ({genres}) => {

  return (
    <div className="container d-flex justify-content-between genres-container flex-wrap py-5">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default Genres;