import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProfileDetail() {
  const params = useParams();
  const personID = params.personID;
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${personID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`).then((res) => {
      //   console.log(res.data);
      setPerson(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div id="ProfileDetail" className="ProfileDetail">
      <div className="container">
        <h2 className="title">
          <strong>ProfileDetail</strong>
        </h2>
        <div className="ProfileDetailBox">
          {/* <div className="img">
            <img src={`https://image.tmdb.org/t/p/w300/${person.poster_path}`} alt="" />
          </div> */}
          <div className="info">
            <div className="titleBox">
              <h3>{person.name}</h3>
              <p className="originalTitle">{person.birthday}</p>
              <p className="release">{person.gender}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        <Link to="/" className="btn">
          list
        </Link>
      </div>
    </div>
  );
}
