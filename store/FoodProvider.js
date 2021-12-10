import { useReducer, useState, useCallback } from "react";
import FoodContext from "./food-context";

const RES_PER_PAGE = 10;

const defaultFood = {
  recipes: [],
  results: 0,
  page: 1,
  resPerPage: RES_PER_PAGE,
  selectedRecipe: null,
  bookmarks: [],
};

const foodReducer = (state, action) => {
  switch (action.type) {
    case "GET_FOOD":
      return {
        ...state,
        recipes: [...action.payload.data],
        results: action.payload.results,
        page: 1,
      };
    case "SELECT_FOOD":
      return { ...state, selectedRecipe: { ...action.payload } };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload === "add" ? state.page + 1 : state.page - 1,
      };
    case "BOOKMARK_TOGGLE_FOOD":
      let bookmarks;
      console.log("helo");
      if (Array.isArray(action.payload))
        bookmarks = [...action.payload, ...state.bookmarks];
      else if (state.bookmarks.some((el) => el.id === action.payload.id))
        bookmarks = state.bookmarks.filter((el) => el.id !== action.payload.id);
      else bookmarks = [action.payload, ...state.bookmarks];
      return { ...state, bookmarks };
    default:
      return state;
  }
};

const FoodProvider = ({ children }) => {
  const [foodState, dispatchFood] = useReducer(foodReducer, defaultFood);
  const [searchLoading, setSearchLoading] = useState(false);
  const getFood = (recipes) => {
    dispatchFood({ type: "GET_FOOD", payload: { ...recipes } });
  };
  const selectFood = useCallback(
    (foodObj) => dispatchFood({ type: "SELECT_FOOD", payload: foodObj }),
    []
  );

  const changePage = (change) =>
    dispatchFood({ type: "CHANGE_PAGE", payload: change });

  const bookmarkFood = useCallback((bookmarked) => {
    dispatchFood({ type: "BOOKMARK_TOGGLE_FOOD", payload: bookmarked });
  }, []);

  const foodContext = {
    search: {
      recipes: foodState.recipes,
      results: foodState.results,
      page: foodState.page,
      resPerPage: foodState.resPerPage,
      searchLoading,
    },
    selectedRecipe: foodState.selectedRecipe,
    bookmarks: foodState.bookmarks,
    setSearchLoading,
    selectRecipe: selectFood,
    getRecipes: getFood,
    changePage,
    setBookmarked: bookmarkFood,
  };

  return (
    <FoodContext.Provider value={foodContext}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
