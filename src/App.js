import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import SingleMovie from './components/SingleMovie';
import MovieDetails from './components/MovieDetails';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <Home />
        <Routes>
          <Route
            path="/tv-shows"
            exact={true}
            element={<SingleMovie />}
          />
          <Route path="/singleMovie" element={<SingleMovie />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
