
import './App.css';

import ProtectedPages from './pages/protectedPages';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PokemonList from './pages/pokemonList';
import Pokemon from './pages/Pokemon';
import Encounters from './pages/encounters';

function App() {
//useSelector retorna del objeto state,el counter de nuestro rootReducer 
  
  //useDispatch es una via/canal para acceder a las acciones definidas en nuestro rootReducer.


  return (
    <div className="App">
      <header className="App-heade">
       
        
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedPages />} >
            <Route path='/pokedex' element={<PokemonList/>} />
            <Route path='/pokedex/:id' element={<Pokemon/>} />
            <Route path='/pokedex/:id/encounters' element={<Encounters/>} />
          </Route>
          <Route path='/settings' />
        </Routes>        

      </header>
    </div>
  );
}

export default App;
