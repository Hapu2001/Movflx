
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie';
import Search from './pages/Search';
import Tvshow from './pages/Tvshow';

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movie />} />
            <Route path="search" element={<Search />} />
            <Route path="tvshow" element={<Tvshow />} />
        </Routes>
  );
}

export default App;
