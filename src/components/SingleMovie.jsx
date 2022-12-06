import { useState, useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "../App.css";

const SingleMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchMovieAPI();
  }, []);

  const fetchMovieAPI = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=c43b6121&s=Lord of the Rings"
      );
      const result = await response.json();
      if (result) {
        setMovies(result?.Search);
        setLoader(false);
      }
    } catch (error) {
      console.log("error:", error);
      setLoader(false);
    }
  };

  return (
    <div className="movie-gallery m-2 my-5">
      <h3 className="text-light mt-2 mb-2">Lord of the Rings</h3>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img
              className="testimonialImages d-block"
              src={movie.Poster}
              alt={movie.title}
            />
            <Carousel.Caption>
              <p className="textlight">{movie.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {loader && <Spinner animation="border" role="status"></Spinner>}
      </Carousel>
    </div>
  );
};
export default SingleMovie;
