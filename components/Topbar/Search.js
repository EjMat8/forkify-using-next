import { InputGroup, Input, InputRightAddon, Button } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import FoodContext from "../../store/food-context";
import { getFoodData as fetchRecipeData } from "../../lib/food-api";
import { catchAsync } from "../../lib/helper";
export default function Search() {
  const foodCtx = useContext(FoodContext);
  const searchRef = useRef();

  const getFoodData = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value.trim();
    foodCtx.setSearchLoading(true);
    await catchAsync(async () => {
      if (!searchValue) throw new Error("No input provided");
      const data = await fetchRecipeData(searchValue);
      foodCtx.getRecipes({
        results: data.results,
        data: [...data.data.recipes],
      });
    });
    foodCtx.setSearchLoading(false);
  };

  return (
    <InputGroup
      size="lg"
      w="lg"
      transition="all 0.2s ease-out"
      boxShadow="md"
      borderRadius="2xl"
      overflow="hidden"
      _focusWithin={{ transform: "translateY(-0.3rem)", boxShadow: "xl" }}
      as="form"
      onSubmit={getFoodData}
    >
      <Input
        bg="gray.50"
        placeholder="Search over 1,000,000 recipes"
        _focus={{
          outline: "none",
        }}
        _hover={{ borderColor: "transparent" }}
        borderColor="transparent"
        className="search-input"
        ref={searchRef}
      />

      <InputRightAddon
        as={Button}
        bgGradient="linear(to-br, brand.100,brand.300)"
        transition="all 0.2s linear"
        border="none"
        color="white"
        _hover={{
          bgGradient: "linear(to-br, brand.100,brand.300)",
          transform: "scale(1.05)",
        }}
        type="submit"
      >
        Search
      </InputRightAddon>
    </InputGroup>
  );
}
