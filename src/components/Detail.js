import axios from "axios";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Detail() {
  const params = useParams();
  const movieID = params.id;
  const [detail, setDetail] = useState({});
  const [genres, setGenre] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      console.log(res.data);
      setDetail(res.data);
      setGenre(res.data.genres);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      console.log(res.data);
      setCast(res.data.cast);
      setCrew(res.data.crew);
    });
  }, []);

  return (
    <div id="datail" className="detail">
      <div className="container">
        <h2 className="title">
          <strong>Detail</strong>
        </h2>
        <div className="detailBox">
          <div className="img">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p className="originalTitle">{detail.original_title}</p>
              <p className="release">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd className="genre">
                  {genres.map((item, idx) => {
                    return <span key={idx}>{item.name}</span>;
                  })}
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <p className="vote">{detail.vote_count}</p>
                <dd></dd>
              </dl>
              <dl>
                <dt>cast</dt>
                <dd>
                  <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide className="item">
                          <Profile key={idx} profileInfo={item} />
                        </SwiperSlide>
                      );
                      //return <Profile key={idx} profile_path={item.profile_path} name={item.name} />;
                    })}
                  </Swiper>
                </dd>
              </dl>
              <dl>
                <dt>crew</dt>
                <dd>
                  <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                    {crew.map((item, idx) => {
                      return (
                        <SwiperSlide className="item">
                          <Profile key={idx} profileInfo={item} />
                        </SwiperSlide>
                      );
                      //return <Profile key={idx} profile_path={item.profile_path} name={item.name} />;
                    })}
                  </Swiper>
                </dd>
              </dl>
            </div>
            <div className="overviewBox">
              <p className="overview">{detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
      <Link to="/">
        <div className="btns">
          <button>list</button>
        </div>
      </Link>
    </div>
  );
}
