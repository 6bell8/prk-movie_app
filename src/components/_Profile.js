export default function Profile({ profileInfo }) {
  // 구조분해 할당
  return (
    <li>
      {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} /> : <img src={`/images/Circle.png`} />}

      <span>{profileInfo.name}</span>
    </li>
  );
}
