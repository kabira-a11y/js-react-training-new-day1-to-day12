
import { useFavourites } from "../context/FavouritesContext";
import UserCard from "../components/UserCard";

function FavouritesPage() {
  const { favourites } = useFavourites();

  return (
    <main className="container">
      <h1>My Favourite Users</h1>

      {favourites.length === 0 ? (
        <p>No favourite users yet. Add users from the Users page.</p>
      ) : (
        <div className="user-grid">
          {favourites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}

export default FavouritesPage;
