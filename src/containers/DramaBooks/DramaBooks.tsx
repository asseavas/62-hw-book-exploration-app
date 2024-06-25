import {useState} from 'react';
import {Book} from '../../types';
import Books from '../../components/Books/Books';

const DramaBooks = () => {
  const [books] = useState<Book[]>([
    {title: 'Драма на охоте', author: 'Антон Чехов', year: '1884 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2QTNP_L2NAXfCKBmOL28krMwRyDKE0uifg&s'},
    {title: 'Пиковая дама', author: 'Александр Пушкин', year: '1834 г.', image: 'https://489407.selcdn.ru/club-dev/images/66dbdbd4-d89a-11ed-8cf8-005056911b95.jpg'},
    {title: 'Мартин Иден', author: 'Джек Лондон', year: '1909 г.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGpvtP7bTLWEkXOOtYcE4-jyQGT5aCc1Now&s'},
    {title: 'Собор Парижской Богоматери ', author: 'Виктор Мари Гюго', year: '1831 г.', image: 'https://img4.labirint.ru/rc/d75685b72815568eaec266dc942896f0/363x561q80/books88/871948/cover.jpg?1674890751'},
    {title: 'Американская трагедия', author: 'Теодор Драйзер', year: '1925 г.', image: 'https://s4-goods.ozstatic.by/replace_1000/456x360/936/193/101/101193936_0.jpg'},
    {title: 'Цветы для Элджернона', author: 'Дэниел Киз', year: '1966 г.', image: 'https://www.moscowbooks.ru/image/book/495/orig/i495423.jpg?cu=20180101000000'},
    {title: 'Бедная Лиза', author: 'Умберто Эко', year: '1792 г.', image: 'https://cdn.azbooka.ru/cv/w1100/7a48845a-87b3-4350-90e5-44d230968290.jpg'},
    {title: 'Имя розы', author: 'Джон Милтон', year: '1980 г.', image: 'https://covers.storytel.com/jpg-640/9785271356780.a0323aa7-c3bd-422d-a82b-16fb23cde517?optimize=high&quality=70'},
  ]);

  return (
    <>
      <h2 className="text-center pt-5  mb-0">Драма</h2>
      <Books books={books}/>
    </>
  );
};

export default DramaBooks;