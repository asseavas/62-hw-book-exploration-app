import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Genres from '../../components/Genres/Genres';
import { Genre } from '../../types';

interface Props {
  genres: Genre[];
}

const Fiction: React.FC<Props> = ({ genres }) => {
  const location = useLocation();
  const isNestedRoute = location.pathname !== '/';

  return (
    <>
      {!isNestedRoute && (
        <div className="container-fluid">
          <div className="container py-5">
            <h1 className="mb-5">Художественная литература</h1>
            <h5 className="my-4">Художественная литература — вид искусства, который использует в качестве выразительных
              средств слова и словесные конструкции языка.</h5>
            <p>Как и любой другой вид искусства, художественная литература предлагает образное осмысление действительности
              и
              в связи с этим, в отличие от научной литературы и публицистики, предлагает читателю авторский взгляд на
              происходящее и вымысел, а не точное изложение реальных фактов.</p>
          </div>
        </div>
      )}
      {!isNestedRoute && (
        <div className="container">
          <Genres genres={genres} />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Fiction;
