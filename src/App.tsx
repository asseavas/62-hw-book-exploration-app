import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Fiction from './containers/Fiction/Fiction';
import {useState} from 'react';
import './App.css';
import PoetryBooks from './containers/PoetryBooks/PoetryBooks';

const App = () => {
  const [genres] = useState([
    {
      id: '1',
      title: 'Поэзия',
      description: 'Поэзия – жанр литературы, содержащий в своей основе стихотворные шедевры с идеальной образностью, достигнутой при гармоничном сочетании оригинальной формы и нового содержания с чувственной окраской.'
    },
    {
      id: '2',
      title: 'Драма',
      description: 'Драма – более серьезный жанр драматического произведения по сравнению с комедией. В основе драмы лежит драматический конфликт между героем и обществом.'
    },
    {
      id: '3',
      title: 'Проза',
      description: 'Проза — в узком смысле один из двух основных способов организации художественной речи, наряду с поэзией. К художественной прозе относят все виды нестихотворной, то есть не имеющей ритма и деления на строки/строфы, речи.'
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
          </Route>
          <Route path="*" element={<h1 className="text-center">Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
