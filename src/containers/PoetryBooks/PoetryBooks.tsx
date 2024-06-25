import Books from '../../components/Books/Books';
import {poetryBooks} from '../../constants';

const PoetryBooks = () => {


  return (
    <>
      <h2 className="text-center pt-5  mb-0">Поэзия</h2>
      <Books books={poetryBooks}/>
    </>
  );
};

export default PoetryBooks;