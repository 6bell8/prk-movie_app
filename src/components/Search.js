import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div id="search" className="search">
      <input
        type="text"
        placeholder="search movie"
        onChange={(e) => {
          console.log(e);
          setSearch(e.currentTarget.value); //e의 의미가 더 포괄적이다. ecurrentTarget은 e보다 작은 단위
        }}
        onKeyUp={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            navigate(`/search?movie=${search}`);
          }
        }}
      />
      <Link className="btnSearch" to={`/search?movie=${search}`}>
        search
      </Link>
    </div>
  );
}
