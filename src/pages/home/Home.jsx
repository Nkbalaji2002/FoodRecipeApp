import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading... Please Wait!</div>;
  }

  return (
    <>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))
        ) : (
          <>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show. Please Search Something
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
