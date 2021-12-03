import React, { useEffect, useContext } from "react";
import FoodContext from "../store/food-context";
import { getFoodData as fetchSelectedFood } from "../lib/food-api";
import { catchAsync } from "../lib/helper";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
function FoodPage() {
  const router = useRouter();
  const { selectRecipe, selectedRecipe } = useContext(FoodContext);

  console.log(router);
  useEffect(() => {
    const setSelectedFood = async () => {
      await catchAsync(async () => {
        const data = await fetchSelectedFood(router.query.foodId, true);
        selectRecipe({ ...data.data.recipe });
      });
    };
    console.log("hi");
    if (!router.query.foodId) return;

    setSelectedFood();
  }, [router.query.foodId, selectRecipe]);
  console.log(selectedRecipe);
  return <Box>this is the food page {router.query.foodId}</Box>;
}
export default FoodPage;
