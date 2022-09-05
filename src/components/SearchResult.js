import axios from "axios";
import Movie from "./Movie";
import qs from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie; //?무시하기

  useEffect(() => {
    //state가 바뀌었을 때 실행하는 함수
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR-US&page=1&query=${searchMovie}`).then((res) => {
      console.log(res.data);
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, [searchMovie]);

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
