import React, { useContext, useEffect } from "react";
import FoodContext from "../../store/food-context";
import { HStack, Text, Flex, Icon, Spacer, Center } from "@chakra-ui/react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
const FoodActions = (props) => {
  const { bookmarks, setBookmarked } = useContext(FoodContext);
  const includedInBookmarks = bookmarks.some(
    (el) => el.id === props.selectedRecipe.id
  );
  const bookmarkToggle = () => {
    setBookmarked(props.selectedRecipe);
  };
  useEffect(() => {
    if (!bookmarks.length) return;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);
  return (
    <HStack pt={20} pb={12} px={20} spacing={8}>
      <HStack>
        <Icon as={AiOutlineClockCircle} color="brand.200" h={6} w={6} />
        <Text fontSize="lg">
          <Text as="span" fontWeight="600">
            {props.selectedRecipe.cooking_time}{" "}
          </Text>
          MINUTES
        </Text>
      </HStack>

      <Flex
        align="center"
        sx={{
          ".serve-btn": {
            boxSize: 5,
            cursor: "pointer",
            transition: "all 0.2s linear",
          },
          ".serve-btn:hover": { transform: "translateY(-2px)" },
        }}
      >
        <Icon as={AiOutlineUsergroupAdd} color="brand.200" boxSize={6} />
        <Text fontSize="lg" mx={2}>
          <Text as="span" fontWeight="600">
            {props.numOfServings}{" "}
          </Text>
          SERVING/S
        </Text>
        <Icon
          as={AiOutlineMinusCircle}
          color="brand.200"
          className="serve-btn"
          ml={4}
          mr={1}
          onClick={() => {
            props.setNumServings((n) => {
              if (n.num === 1) return { ...n };

              return { ...n, num: n.num - 1 };
            });
          }}
        />
        <Icon
          as={AiOutlinePlusCircle}
          color="brand.200"
          className="serve-btn"
          onClick={() => {
            props.setNumServings((n) => ({
              ...n,
              num: n.num + 1,
            }));
          }}
        />
      </Flex>
      <Spacer />
      <Center
        p={3}
        bgGradient="linear(to-br,brand.100, brand.300)"
        borderRadius="full"
        onClick={bookmarkToggle}
        cursor="pointer"
        transition="all 0.3s ease-out"
        _active={{ transform: "scale(1.15)" }}
      >
        <Icon
          as={includedInBookmarks ? IoBookmark : IoBookmarkOutline}
          boxSize={6}
          color="#fff"
        />
      </Center>
    </HStack>
  );
};

export default React.memo(FoodActions);
