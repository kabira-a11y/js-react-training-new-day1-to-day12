
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavourites } from "../context/FavouritesContext";

function UserDetailPage() {
  const { id } = useParams();

  const {
    data: user,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  const { toggleFavourite, isFavourite } = useFavourites();

  if (loading) return <p className="message">Loading user...</p>;

  if (error || !user) {
    return (
      <main className="container">
        <h2>User not found</h2>
        <Link to="/">Back to Users</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/">← Back to Users</Link>

      <section className="detail-card">
        <h1>{user.name}</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
        <p><strong>Company:</strong> {user.company.name}</p>

        <button onClick={() => toggleFavourite(user)}>
          {isFavourite(user.id) ? "Remove Favourite" : "Add Favourite"}
        </button>
      </section>

      <h2>User Posts</h2>

      {postsLoading && <p>Loading posts...</p>}
      {postsError && <p className="error">{postsError}</p>}

      {posts && posts.map((post) => (
        <article className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}

export default UserDetailPage;
