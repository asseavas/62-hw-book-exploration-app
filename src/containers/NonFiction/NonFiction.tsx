import {useEffect, useState} from 'react';
import {Popover} from 'bootstrap';
import {Book} from '../../types';
import BookCard from '../../components/Books/BookCard';

const NonFiction = () => {
  const [info] = useState([
    { name: 'Биография/мемуары', desc: 'История жизни человека рассказанная кем-то другим или от лица самого человека'},
    { name: 'История', desc: 'Рассказывают историю нации или периода времени' },
    { name: 'Бизнес/самопомощь', desc: 'Советы и рекомендации вопросам начиная от открытия бизнеса и заканчивая улучшением личных отношений' },
    { name: 'Наука', desc: 'Созданы для неспециалистов и полны увлекательных фактов' },
    { name: 'Путешествия', desc: 'Содержат информацию обо всем – от отелей до ресторанов'},
    { name: 'Природа/окружающая среда', desc: 'Образовательные, подчеркивают важность сохранения природы'},
    { name: 'Кулинарные книги', desc: 'Содержат рецепты любых блюд – от простого блюда до сложного торта' },
    { name: 'Справочная литература', desc: 'Необходима для тех, кто ищет информацию по определенной теме'},
    { name: 'Искусство/фотография', desc: 'Представлены работы художников и фотографов со всего мира' },
  ]);

  const [books] = useState<Book[]>([
    {title: 'Мост через бездну', author: 'Паола Волкова', year: '2013 г.', image: 'https://img3.labirint.ru/rc/58400ff1278f8ea50980b3f36a58d3d5/363x561q80/books63/627759/cover.jpg?1687332341'},
    {title: 'Человек Противный', author: 'Йаэль Адлер', year: '2019 г.', image: 'https://www.moscowbooks.ru/image/book/684/orig/i684185.jpg?cu=20191216114523'},
    {title: 'Кости: скрытая жизнь', author: 'Брайан Свитек', year: '2015 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WQt0j_zoNYYPtWI4U1b8hEF_-8MaP5sblw&s'},
    {title: 'Мифы воды', author: 'Наталия Осояну', year: '2018 г.', image: 'https://s1.livelib.ru/boocover/1009660837/200x305/1e15/boocover.jpg'},
    {title: 'От саванны до дивана', author: 'Джонатан Лосос', year: '2020 г.', image: 'https://s1.livelib.ru/boocover/1009630798/200x305/ce22/boocover.jpg'},
    {title: 'Леди-убийцы', author: 'Тори Телфер', year: '2019 г.', image: 'https://s1.livelib.ru/boocover/1009050943/200x305/f4e5/boocover.jpg'},
    {title: 'Пропаганда', author: 'Эдвард Луис Бернейс', year: '1928 г.', image: 'https://img4.labirint.ru/rc/560f3f96eb4276ee548934c2136f5d0f/363x561q80/books65/642596/cover.jpg?1564114921'},
    {title: 'Искусство войны', author: 'Сунь-Цзы', year: 'VI — Vв. до н. э.', image: 'https://s1.livelib.ru/boocover/1009037191/200x305/5384/boocover.jpg'},
  ]);

  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
      new Popover(popoverTriggerEl);
    });
  }, []);

  const firstHalf = books.slice(0, Math.ceil(books.length / 2));
  const secondHalf = books.slice(Math.ceil(books.length / 2));

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