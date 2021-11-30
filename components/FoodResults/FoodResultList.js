import { useContext } from "react";

import { VStack, Spacer } from "@chakra-ui/react";
import FoodResultItem from "./FoodResultItem";
import FoodContext from "../../store/food-context";
export default function FoodResultList() {
  const foodCtx = useContext(FoodContext);
  const foodSearchPage = foodCtx.search.recipes.slice(
    (foodCtx.search.page - 1) * 10,
    foodCtx.search.resPerPage * foodCtx.search.page
  );
  return (
    <VStack pt={8} spacing={6}>
      {foodCtx.search.recipes.length &&
        foodSearchPage.map((el) => (
          <FoodResultItem
            key={el.id}
            id={el.id}
            publisher={el.publisher}
            imageUrl={el.image_url}
            title={el.title}
          />
        ))}
      <Spacer />
    </VStack>
  );
}

/**
"publisher": "Closet Cooking",
"image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
"title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
"id": "5ed6604591c37cdc054bcd09"
*/
