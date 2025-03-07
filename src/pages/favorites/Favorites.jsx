import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem item={item} />)
        ) : (
          <>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing is added in favorites
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
