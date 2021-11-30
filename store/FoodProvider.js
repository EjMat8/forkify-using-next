import { useReducer } from "react";
import FoodContext from "./food-context";

const RES_PER_PAGE = 10;

const defaultFood = {
  recipes: [],
  results: 0,
  page: 1,
  resPerPage: RES_PER_PAGE,
  selectedRecipe: {},
};

const foodReducer = (state, action) => {
  switch (action.type) {
    case "GET_FOOD":
      return {
        ...state,
        recipes: [...action.payload.data],
        results: action.payload.results,
      };
    case "SELECT_FOOD":
      return { ...state, selectedRecipe: { ...action.payload } };
    default:
      return state;
  }
};

const FoodProvider = ({ children }) => {
  const [foodState, dispatchFood] = useReducer(foodReducer, defaultFood);
  const getFood = (recipes) => {
    dispatchFood({ type: "GET_FOOD", payload: { ...recipes } });
  };
  const selectFood = (foodObj) =>
    dispatchFood({ type: "SELECT_FOOD", payload: foodObj });

  const changePage = (change) =>
    dispatchFood({ type: "CHANGE_PAGE", payload: change });
  const foodContext = {
    search: {
      recipes: foodState.recipes,
      results: foodState.results,
      page: foodState.page,
      resPerPage: foodState.resPerPage,
    },
    selectedRecipe: foodState.selectedRecipe,
    selectRecipe: selectFood,
    getRecipes: getFood,
    changePage,
  };

  return (
    <FoodContext.Provider value={foodContext}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
