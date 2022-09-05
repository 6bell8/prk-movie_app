import { Link } from "react-router-dom";
import Search from "./Search";

//function이 하나만 있을 때 상단에 export default 작성

export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <h1>
          <Link to="/">Movie-App</Link>
        </h1>
        <Search />
      </header>
    </>
  );
}
