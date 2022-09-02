import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";

export default function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR-US&page=1`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="title">Popular Movie</h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            // console.log({ ...item });
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}
