import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Character from './components/pages/Character';
import Planet from './components/pages/Planet';
import Starship from './components/pages/Starship';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Character />} />
            <Route path='/planets' element={<Planet />} />
            <Route path='/starships' element={<Starship />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
