
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function UserCard({ user }) {
  const { toggleFavourite, isFavourite } = useFavourites();

  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>

      <div className="card-actions">
        <Link to={`/users/${user.id}`}>View Details</Link>

        <button onClick={() => toggleFavourite(user)}>
          {isFavourite(user.id) ? "Remove Favourite" : "Add Favourite"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
