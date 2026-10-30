import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { FavouritesProvider } from "./context/FavouritesContext";

import Header from "./components/Header";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import FavouritesPage from "./pages/FavouritesPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UsersPage />} />
            <Route path="users/:id" element={<UserDetailPage />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  );
}

export default App;