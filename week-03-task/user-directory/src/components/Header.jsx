
import { NavLink } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function Header() {
  const { favourites } = useFavourites();

  return (
    <header className="header">
      <h2>User Directory</h2>

      <nav>
        <NavLink to="/">Users</NavLink>
        <NavLink to="/favourites">
          Favourites ({favourites.length})
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
