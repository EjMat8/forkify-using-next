import React, { useEffect, useContext, useState } from "react";
import FoodContext from "../store/food-context";
import { getFoodData as fetchSelectedFood } from "../lib/food-api";
import { catchAsync } from "../lib/helper";
import { Box, Center } from "@chakra-ui/react";

import Spinner from "../components/UI/Spinner";
import FoodHeader from "../components/FoodPage/FoodHeader";
import FoodActions from "../components/FoodPage/FoodActions";
import FoodRecipe from "../components/FoodPage/FoodRecipe";
import FoodFooter from "../components/FoodPage/FoodFooter";
import { useRouter } from "next/router";

function FoodPage() {
  const router = useRouter();
  const { selectRecipe, selectedRecipe } = useContext(FoodContext);
  const [isLoading, setIsLoading] = useState(false);
  const [numServings, setNumServings] = useState({
    originalNum: 0,
    num: 0,
  });

  useEffect(() => {
    if (!router.query.foodId) return;
    const setSelectedFood = async () => {
      setIsLoading(true);
      await catchAsync(async () => {
        const data = await fetchSelectedFood(router.query.foodId, true);
        selectRecipe({ ...data.data.recipe });
      });

      setIsLoading(false);
    };
    setSelectedFood();
  }, [router.query.foodId, selectRecipe]);

  useEffect(() => {
    if (!selectedRecipe) return;

    setNumServings((obj) => ({
      originalNum: selectedRecipe.servings,
      num: selectedRecipe.servings,
    }));
  }, [selectedRecipe]);

  return (
    <Box minH="100%">
      {isLoading && (
        <Center>
          <Spinner my={16} />
        </Center>
      )}
      {!isLoading && selectedRecipe && (
        <React.Fragment>
          <FoodHeader
            title={selectedRecipe.title}
            imageUrl={selectedRecipe.image_url}
          />
          <FoodActions
            selectedRecipe={selectedRecipe}
            setNumServings={setNumServings}
            numOfServings={numServings.num}
          />
          <FoodRecipe
            ingredients={selectedRecipe.ingredients}
            numServings={numServings}
          />
          <FoodFooter
            url={selectedRecipe.source_url}
            publisher={selectedRecipe.publisher}
          />
        </React.Fragment>
      )}
    </Box>
  );
}
export default FoodPage;
