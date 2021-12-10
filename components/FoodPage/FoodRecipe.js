import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import FoodRecipeItem from "./FoodRecipeItem";

function FoodRecipe({ ingredients = null, numServings }) {
  return (
    <Box bg="gray.light_2" py={12} px={16}>
      <Heading
        textAlign="center"
        fontSize="2xl"
        fontWeight="600"
        color="brand.200"
        mb={5}
      >
        RECIPE INGREDIENTS
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        rowGap={8}
        colgap={3}
        alignItems="start"
      >
        {ingredients &&
          !!ingredients.length &&
          ingredients.map((el, i) => (
            <FoodRecipeItem key={i} {...el} numServings={numServings} />
          ))}
      </Grid>
    </Box>
  );
}
export default React.memo(FoodRecipe);
