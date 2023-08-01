import { createContext, useState } from "react";
export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});
export function FavouritesContextProvider(props) {
  const [userFavourite, setUserFavourite] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    console.log(favouriteMeetup, "favouriteMeetup");
    setUserFavourite((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourite((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourite.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourite,
    totalFavourites: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
