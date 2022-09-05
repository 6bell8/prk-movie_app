import { Link } from "react-router-dom";
import ProfileDetail from "./ProfileDetail";

export default function Profile({ profileInfo }) {
  // console.log(profileInfo);
  return (
    <>
      <Link to={`/actor/${profileInfo.id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} />
        <span>{profileInfo.name}</span>
      </Link>
    </>
  );
}
