import { Flex, Spacer, Button } from "@chakra-ui/react";
import FoodContext from "../../store/food-context";
import { useContext } from "react";
export default function FoodPagination() {
  const foodCtx = useContext(FoodContext);
  const totalPages = Math.ceil(
    foodCtx.search.results / foodCtx.search.resPerPage
  );

  return <Flex></Flex>;
}
