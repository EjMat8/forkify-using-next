import { useContext, Fragment } from "react";

import { VStack, Spinner } from "@chakra-ui/react";
import FoodResultItem from "./FoodResultItem";
import FoodContext from "../../store/food-context";
import FoodPagination from "./FoodPagination";

export default function FoodResultList() {
  const foodCtx = useContext(FoodContext);
  const foodSearchPage = foodCtx.search.recipes.slice(
    (foodCtx.search.page - 1) * 10,
    foodCtx.search.resPerPage * foodCtx.search.page
  );
  return (
    <Fragment>
      <VStack pt={8} spacing={1}>
        {foodCtx.search.searchLoading && (
          <Spinner color="brand.200" size="xl" speed="0.8s" my={8} />
        )}
        {foodCtx.search.recipes.length &&
          !foodCtx.search.searchLoading &&
          foodSearchPage.map((el) => (
            <FoodResultItem
              key={el.id}
              id={el.id}
              publisher={el.publisher}
              imageUrl={el.image_url}
              title={el.title}
            />
          ))}
      </VStack>
      <FoodPagination />
    </Fragment>
  );
}

/**
"publisher": "Closet Cooking",
"image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
"title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
"id": "5ed6604591c37cdc054bcd09"
*/
