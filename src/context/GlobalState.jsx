import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipeList, setrecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setfavoritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposne = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await resposne.data;

      if (data?.data?.recipes) {
        setrecipeList(data?.data?.recipes);
        setloading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      setSearchParam("");
    }
  };

  const handleAddToFavorite = (getCurrnentItem) => {
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrnentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrnentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setfavoritesList(cpyFavoritesList);
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          searchParam,
          loading,
          recipeList,
          setSearchParam,
          handleSubmit,
          recipeDetailsData,
          setRecipeDetailsData,
          handleAddToFavorite,
          favoritesList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalState;
