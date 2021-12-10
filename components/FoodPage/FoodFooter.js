import React from "react";
import { VStack, Text, Button, Heading, Link, Icon } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
function FoodFooter(props) {
  return (
    <VStack py={16} px={16} spacing={6}>
      <Heading
        color="brand.200"
        textTransform="uppercase"
        fontSize="2xl"
        fontWeight="600"
      >
        How to cook it
      </Heading>
      <Text textAlign="center" fontSize="lg">
        This recipe was carefully designed and tested by{" "}
        <Text as="span" fontWeight="bold">
          {props.publisher}
        </Text>{" "}
        Please check out directions at their website.
      </Text>
      <Button
        bgGradient="linear(to-br, brand.100,brand.300)"
        _hover={{ bgGradient: "linear(to-br, brand.300, brand.100)" }}
        borderRadius="full"
        as={Link}
        href={props.url}
        color="white"
        isExternal
        p={6}
        fontSize="lg"
      >
        Directions{" "}
        <Icon as={AiOutlineArrowRight} transform="translateY(2px)" ml={2} />
      </Button>
    </VStack>
  );
}
export default React.memo(FoodFooter);
