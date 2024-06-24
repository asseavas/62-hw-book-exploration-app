import React, {useState} from 'react';
import {Book} from '../../types';
import Books from '../../components/Books/Books';

const PoetryBooks: React.FC = () => {
  const [books] = useState<Book[]>([
    {title: 'Цветы зла', author: 'Шарль Бодлер', year: '1857 г.', image: 'https://img3.labirint.ru/rc/dffad7ecce351ec54481e048f5b9d3dc/363x561q80/books86/859253/cover.png?1667823907'},
    {title: 'Сонеты к Орфею', author: 'Райнер Мария Рильке', year: '1923 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NpejxfYFejgNcVLTkysNe1DQfMUSNdwqWQ&s'},
    {title: 'Лесной царь', author: 'Иоганн Вольфганг фон Гёте', year: '1782 г.', image: 'https://cdn.azbooka.ru/cv/w1100/25a8a8f9-3971-4027-acab-c1550362a098.jpg'},
    {title: 'Рубаи', author: 'Омар Хайям', year: '1859 г.', image: 'https://metida.ru/upload/iblock/2c2/xg7entqwq1lyf9dlbmavbrzeax7sx9ra.jpg'},
    {title: 'Комедии', author: 'Уильям Шекспир', year: '1623 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gFRi8y2RuiibA2GAqTHcNuo7uCc_v9BNYw&s'},
    {title: 'Новая любовь, новая жизнь', author: 'Иоганн Вольфганг фон Гёте', year: '1862 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNH7YhawFm3_clGOZmHAQkqOhG-omWWAEDw&s'},
    {title: 'Песнь о вещем Олеге', author: 'Александр Пушкин', year: '1825 г.', image: 'https://img4.labirint.ru/rc/560f3f96eb4276ee548934c2136f5d0f/363x561q80/books65/642596/cover.jpg?1564114921'},
    {title: 'Потерянный рай', author: 'Джон Милтон', year: '1667 г.', image: 'https://cdn.azbooka.ru/cv/w1100/1adf7ca4-e542-4d15-a38c-89f940fb5b3e.jpg'},
  ]);

  return (
    <>
      <Books books={books} />
    </>
  );
};

export default PoetryBooks;