import Books from '../../components/Books/Books';
import {proseBooks} from '../../constants';

const ProseBooks = () => {


  return (
    <>
      <h2 className="text-center pt-5  mb-0">Проза</h2>
      <Books books={proseBooks}/>
    </>
  );
};

export default ProseBooks;