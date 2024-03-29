import { useState, useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "../App.css";
import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

const MovieGalary = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchMovieAPI();
  }, []);

  const fetchMovieAPI = async () => {
    try {
      let config = {
        method: "get",
        url: `${base_url}/medias`,
        headers: {
          "Content-Type": "application/json"
        }
      };
      axios(config)
        .then((response) => {
          console.log();
          if (response?.data) {
            setMovies(response.data);
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error:", error);
      setLoader(false);
    }
  };

  return (
    <div className="movie-gallery m-2">
      <h3 className="text-light mt-2 mb-2">The Witcher</h3>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.imdbID}>
            <img
              className="testimonialImages d-block"
              src={movie.poster}
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
export default MovieGalary;
