import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import FoodResultItem from "../FoodResults/FoodResultItem";
export default function Bookmarks({ hover, hoverTrue, hoverFalse, bookmarks }) {
  return (
    <React.Fragment>
      {hover && (
        <VStack
          w="25rem"
          bg="white"
          pos="absolute"
          right="0"
          bottom="0"
          transform="translateY(99.5%)"
          zIndex="10"
          py={3}
          onMouseEnter={hoverTrue}
          onMouseLeave={hoverFalse}
        >
          {!bookmarks.length ? (
            <Text p={12} fontSize="lg" textTransform="none">
              No bookmarks yet. Find a nice recipe and bookmark it! :)
            </Text>
          ) : (
            bookmarks.map((el) => (
              <FoodResultItem
                key={el.id}
                id={el.id}
                publisher={el.publisher}
                imageUrl={el.image_url}
                title={el.title}
              />
            ))
          )}
        </VStack>
      )}
    </React.Fragment>
  );
}
