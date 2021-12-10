import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Fraction } from "fractional";
import { AiOutlineCheck } from "react-icons/ai";
function FoodRecipeItem({ quantity, unit, description, numServings }) {
  const numIndiv = !quantity
    ? 0
    : (1 / numServings.originalNum) * quantity * numServings.num;

  return (
    <HStack>
      <Icon as={AiOutlineCheck} boxSize={5} color="brand.200" />
      <Text>{`${!!quantity ? new Fraction(numIndiv.toFixed(2)) + " " : ""}${
        !!unit ? unit + " " : ""
      }${description}`}</Text>
    </HStack>
  );
}

export default React.memo(FoodRecipeItem);
