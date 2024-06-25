import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Fiction from './containers/Fiction/Fiction';
import PoetryBooks from './containers/PoetryBooks/PoetryBooks';
import DramaBooks from './containers/DramaBooks/DramaBooks';
import ProseBooks from './containers/ProseBooks/ProseBooks';
import NonFiction from './containers/NonFiction/NonFiction';
import Writers from './containers/Writers/Writers';
import Footer from './components/Footer/Footer';
import {genres} from './constants';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="bg-body-secondary main-container">
        <Routes>
          <Route path="/" element={<Fiction genres={genres} />} >
            <Route path="поэзия" element={<PoetryBooks />} />
            <Route path="драма" element={<DramaBooks />} />
            <Route path="проза" element={<ProseBooks />} />
          </Route>
          <Route path="/нон-фикшн" element={<NonFiction />} />
          <Route path="/писатели" element={<Writers />} />
          <Route path="*" element={<h1 className="text-center">Not found!</h1>}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
