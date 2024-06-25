import {useState} from 'react';
import {Book} from '../../types';
import Books from '../../components/Books/Books';

const ProseBooks = () => {
  const [books] = useState<Book[]>([
    {title: 'Каторга', author: 'Валентин Пикуль', year: '1988 г.', image: 'https://img3.labirint.ru/rc/6a9a0ce1619553aa34cd2a88dd0764b3/363x561q80/books61/609227/cover.jpg?1506417946'},
    {title: 'Дожить до рассвета', author: ' Василь Быков', year: '1976 г.', image: 'https://sun9-46.userapi.com/impg/XV9wwH0gE8aHgwNk9QoTdKWhpKs7dVjqa2T7gA/R9ZmIRfZPcg.jpg?size=510x803&quality=95&sign=66b063f8927077b8a78c1f6ab4435298&type=album'},
    {title: 'Москва — Петушки', author: 'Венедикта Ерофеева', year: '1973 г.', image: 'https://cdn.azbooka.ru/cv/w1100/d9c97e50-2d5d-4487-b971-f67615072a9a.jpg'},
    {title: 'Звездные часы человечеств', author: ' Стефан Цвейг', year: '1927 г.', image: 'https://cv3.litres.ru/pub/c/cover_415/70497139.jpg'},
    {title: 'Два капитана', author: ' Вениамин Каверин', year: '1940 г.', image: 'https://www.100bestbooks.ru/pictures/books/Kaverin_Dva_kapitana.jpg'},
    {title: 'Цитадель', author: 'Арчибалд Кронин', year: '1937 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMjzDKauI8DDSYODgfSqVbjsXuE4E6b-gYA&s'},
    {title: 'Яма', author: 'Александр Куприн', year: '1909 г.', image: 'https://img4.labirint.ru/rc/1afc56684dcc507842721ea67df6014f/363x561q80/books81/809756/cover.jpg?1653477931'},
    {title: 'Скотный двор', author: 'Джордж Оруэлл', year: '1945 г.', image: 'https://s1.livelib.ru/boocover/1008960349/200x305/6cee/boocover.jpg'},
  ]);

  return (
    <>
      <Books books={books} />
    </>
  );
};

export default ProseBooks;