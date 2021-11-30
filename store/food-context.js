import { createContext } from "react";

const FoodContext = createContext({
  search: {
    recipes: [],
    results: 0,
    page: 1,
    resPerPage: 10,
  },
  selectedRecipe: {},
  getRecipes: (recipes) => {},
  selectRecipe: (recipe) => {},
  changePage: (change) => {},
});

export default FoodContext;
