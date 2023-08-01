import React, { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import { FavouritesContext } from "../store/favourites-context";

const Favourites = () => {
  const favouriteCtx = useContext(FavouritesContext);
  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You've got no favorites yet. Start adding some.</p>;
  } else {
    content = <MeetupList items={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
