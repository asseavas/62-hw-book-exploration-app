import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Fiction from './containers/Fiction/Fiction';
import {useState} from 'react';
import PoetryBooks from './containers/PoetryBooks/PoetryBooks';
import './App.css';
import DramaBooks from './containers/DramaBooks/DramaBooks';
import ProseBooks from './containers/ProseBooks/ProseBooks';
import NonFiction from './containers/NonFiction/NonFiction';

const App = () => {
  const [genres] = useState([
    {
      id: '1',
      title: 'Поэзия',
      description: 'Поэзия – литературный жанр, в котором используется ритм, рифма и образные выражения, чтобы выразить чувства и идеи. Часто имеет короткие строки и может передавать глубокие мысли.'
    },
    {
      id: '2',
      title: 'Драма',
      description: 'Драма – жанр литературы, предназначенный для постановки на сцене, где персонажи через диалоги и действия рассказывают историю, часто связанную с сильными эмоциями и конфликтами.'
    },
    {
      id: '3',
      title: 'Проза',
      description: 'Проза — жанр литературы, написанный обычным языком без ритма и рифмы, как в повседневной речи. В прозе рассказываются истории, описываются события и персонажи, как в романах и рассказах.'
    },
  ]);

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
          <Route path="*" element={<h1 className="text-center">Not found!</h1>}/>
        </Routes>
      </main>
      <footer>
        <nav className="navbar shadow-sm rounded-4 rounded-bottom-0 p-3">
          <div className="container d-flex justify-content-center align-items-center">
            <ul className="navbar-nav d-flex flex-row gap-4 flex-nowrap">
              <li className="nav-item">
                <a href="#" className="footer-link">О нас</a>
              </li>
              <li className="nav-item">
                <a href="#" className="footer-link">Лицензия</a>
              </li>
              <li className="nav-item">
                <a href="#" className="footer-link">Блог</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default App;
