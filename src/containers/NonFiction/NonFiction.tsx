import {useEffect} from 'react';
import {Popover} from 'bootstrap';
import BookCard from '../../components/Books/BookCard';
import {info, nonFictionBooks} from '../../constants';

const NonFiction = () => {
  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
      new Popover(popoverTriggerEl);
    });
  }, []);

  const firstHalf = nonFictionBooks.slice(0, Math.ceil(nonFictionBooks.length / 2));
  const secondHalf = nonFictionBooks.slice(Math.ceil(nonFictionBooks.length / 2));

  const bcgUrl = 'https://i.pinimg.com/originals/01/0b/a6/010ba623bc44b1897e136c0dfc42bd4e.jpg';

  const imageStyle = {
    background: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
      url(${bcgUrl}) no-repeat center center / cover
    `,
  };

  return (
    <div className="text-center">
      <div className="container-fluid pt-4 pb-5 text-light" style={imageStyle}>
        <div className="container pt-5 pb-3 px-4">
          <h1 className="mb-5">Нон-фикшн</h1>
          <h5 className="mb-3 pt-4 px-5">Нон-фикшн – термин, обозначающий все произведения нехудожественной, прикладной
            литературы.</h5>

        </div>
      </div>
      <div className="container px-4">
        <p className="p-5">Произведения категории нон-фикшн основаны не на вымысле, а на фактах. В связи с этим
          в категорию нон-фикшн попадает широкий спектр книжной продукции, включая кулинарные книги, мемуары, эссе,
          энциклопедии и словари, научно-популярную литературу, книги по психологии и личностному росту, философию и
          многое другое.</p>
        <h4 className="mb-5">Категории нехудожественной литературы</h4>
        <ul className="text-start ms-3 d-flex gap-2 flex-column">
          {info.map(item => (
            <li key={item.name} className="ps-2" data-bs-toggle="popover" data-bs-trigger="hover focus"
                data-bs-placement="right" data-bs-content={item.desc} style={{cursor: 'pointer', width: '200px'}}>
              {item.name}
            </li>
          ))}
        </ul>
        <div id="bookCarousel" className="carousel slide py-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {firstHalf.map((book, index) => (
                  <div key={index} className="col-md-3">
                    <BookCard book={book}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                {secondHalf.map((book, index) => (
                  <div key={index} className="col-3">
                    <BookCard book={book}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NonFiction;