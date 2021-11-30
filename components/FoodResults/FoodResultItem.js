import { HStack, Box, Text } from "@chakra-ui/react";

export default function FoodResultItem(props) {
  return (
    <HStack px={7} w="100%" spacing={6}>
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
  );
}
