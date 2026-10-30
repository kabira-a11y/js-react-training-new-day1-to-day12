
import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function toggleFavourite(user) {
    setFavourites((previous) => {
      const exists = previous.some((item) => item.id === user.id);

      if (exists) {
        return previous.filter((item) => item.id !== user.id);
      }

      return [...previous, user];
    });
  }

  function isFavourite(id) {
    return favourites.some((user) => user.id === id);
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
