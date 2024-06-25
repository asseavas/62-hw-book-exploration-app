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

  const bcgUrl = 'https://get.pxhere.com/photo/book-reading-pile-shop-money-cash-literature-library-books-currency-classic-sale-fair-showcase-fund-novelties-inventory-bestseller-personal-computer-hardware-bookselling-697659.jpg';

  const imageStyle = {
    background: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
      url(${bcgUrl}) no-repeat center center / cover
    `,
  };

  return (
    <>
      {!isNestedRoute && (
        <div className="text-center">
          <div className="container-fluid text-light" style={imageStyle}>
            <div className="container pt-5 pb-3 px-4">
              <h1 className="mb-5">Художественная литература</h1>
              <h5 className="mb-5 py-4 px-5 ">Художественная литература — это один из видов искусства, в котором
                средством создания художественного образа является слово, язык.</h5>

            </div>
          </div>
          <div className="container px-4 d-flex justify-content-center">
            <p className="w-75 pt-5">Как и любой другой вид искусства, художественная литература предлагает образное
              осмысление действительности
              и
              в связи с этим, в отличие от научной литературы и публицистики, предлагает читателю авторский взгляд на
              происходящее и вымысел, а не точное изложение реальных фактов.</p>
          </div>
        </div>
      )}
      {!isNestedRoute && (
        <div className="container">
          <Genres genres={genres}/>
        </div>
      )}
      <Outlet/>
    </>
  );
};

export default Fiction;
