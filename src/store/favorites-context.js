import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    // pass a function to `setUserFavorites` to garantee
    // the `userFavorites` is updated
    const updatedUserFavoritesWithNewOne = (prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup);

    setUserFavorites(updatedUserFavoritesWithNewOne);
  };

  const removeFavoriteHandler = (meetupId) => {
    // the returning array will be missing the item that corresponds to the id
    const updatedUserFavoritesWithoutOne = (prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId);

    setUserFavorites(updatedUserFavoritesWithoutOne);
  };

  const itemIsFavoriteHandler = (meetupId) =>
    userFavorites.some((meetup) => meetup.id === meetupId);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
