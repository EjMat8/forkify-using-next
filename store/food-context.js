import { createContext } from "react";

const FoodContext = createContext({
  search: {
    recipes: [],
    results: 0,
    page: 1,
    resPerPage: 10,
    searchLoading: false,
  },
  selectedRecipe: {},
  setSearchLoading: (bool) => {},
  getRecipes: (recipes) => {},
  selectRecipe: (recipe) => {},
  changePage: (change) => {},
});

export default FoodContext;
