import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
function FoodResultItem(props) {
  return (
    <Link href={`/${props.id}`} passHref>
      <HStack
        px={7}
        w="100%"
        spacing={6}
        py={2.5}
        borderRadius="2xl"
        transition="all 0.2s ease-in"
        cursor="pointer"
        _hover={{ bg: "gray.light", transform: "translateY(-2px)" }}
      >
        <Box
          minH="65px"
          minW="65px"
          borderRadius="full"
          bgSize="cover"
          bgImage={`linear-gradient(to right bottom,RGBA(251,219,137,0.32),RGBA(244,137,130,0.32)
),url('${props.imageUrl}')`}
          bgPosition="center"
        ></Box>
        <Box overflow="hidden">
          <Text isTruncated color="brand.200" fontSize="lg">
            {props.title}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {props.publisher}
          </Text>
        </Box>
      </HStack>
    </Link>
  );
}

export default React.memo(FoodResultItem);
