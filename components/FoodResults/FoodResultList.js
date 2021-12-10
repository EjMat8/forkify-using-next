import { useContext, Fragment } from "react";

import { VStack } from "@chakra-ui/react";
import Spinner from "../UI/Spinner";
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
        {foodCtx.search.searchLoading && <Spinner my={8} />}
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
