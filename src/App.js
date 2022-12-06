import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import NavbarScreen from "./components/Navbar";
import Footer from "./components/Footer";
import MovieGalary from "./components/MovieGalary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarScreen />
        <Routes>
          <Route path="/tv-shows" element={<Header />} />
          <Route path="/singleMovie" element={<SingleMovie />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
          <Route path="/movieGalary" element={<MovieGalary />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
