
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="container not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Users</Link>
    </main>
  );
}

export default NotFoundPage;
