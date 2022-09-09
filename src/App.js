
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie';
import Search from './pages/Search';
import Tvshow from './pages/Tvshow';
import Auth from './pages/Auth';
import BookMark from './pages/BookMark';

function App() {
  return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="search" element={<Search />} />
            <Route path="tvshow" element={<Tvshow />} />
            <Route path="auth" element={<Auth />} />
            <Route path="bookmark" element={<BookMark />} />
            <Route path="search" element={<Search />} />
        </Routes>
  );
}

export default App;
