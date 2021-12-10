import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const FoodHeader = (props) => {
  return (
    <Box
      h="18rem"
      bgImage={`linear-gradient(to right bottom,RGBA(251,219,137,0.65),RGBA(244,137,130,0.65)
        ),url(${props.imageUrl})`}
      bgSize="100%"
      bgPos="center"
      pos="relative"
    >
      <Heading
        color="#fff"
        w="50%"
        fontSize="4xl"
        fontWeight="600"
        pos="absolute"
        bottom="0"
        left="50%"
        transform="translate(-50%,25%) skewY(-7deg)"
        textAlign="center"
        textTransform="uppercase"
        lineHeight="1.7"
      >
        <Text
          px={4}
          py={2}
          as="span"
          boxDecorationBreak="clone"
          webkitboxdecorationbreak="clone"
          bgImage="linear-gradient(to right bottom,RGBA(251,219,137),RGBA(244,137,130)
          )"
        >
          {props.title}
        </Text>
      </Heading>
    </Box>
  );
};

export default React.memo(FoodHeader);
