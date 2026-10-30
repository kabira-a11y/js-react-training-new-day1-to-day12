
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";

function UsersPage() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");

  if (loading) return <p className="message">Loading users...</p>;
  if (error) return <p className="message error">{error}</p>;

  const cities = [...new Set(users.map((user) => user.address.city))];

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city === "All" || user.address.city === city;

    return matchesName && matchesCity;
  });

  return (
    <main className="container">
      <h1>All Users</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="All">All Cities</option>

          {cities.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <p>Showing {filteredUsers.length} users</p>

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}

export default UsersPage;
