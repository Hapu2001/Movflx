
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie';
import Search from './pages/Search';
import Tvshow from './pages/Tvshow';

function App() {
  return (
        <Routes>
            <Route path="/Movflx" exact component={<Home />} />
            <Route path="/Movflx/movies" exact component={<Movie />} />
            <Route path="/Movflx/search" exact component={<Search />} />
            <Route path="/Movflx/tvshow" exact component={<Tvshow />} />
        </Routes>
  );
}

export default App;
