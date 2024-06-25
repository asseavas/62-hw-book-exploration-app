import Books from '../../components/Books/Books';
import {dramaBooks} from '../../constants';

const DramaBooks = () => {


  return (
    <>
      <h2 className="text-center pt-5  mb-0">Драма</h2>
      <Books books={dramaBooks}/>
    </>
  );
};

export default DramaBooks;