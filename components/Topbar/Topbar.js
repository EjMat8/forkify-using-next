import { useContext, useState, Fragment } from "react";
import FoodContext from "../../store/food-context";
import { GridItem as Gi, HStack, Image, useDisclosure } from "@chakra-ui/react";
import Search from "./Search";
import ActionBar from "./ActionBar";
import Link from "next/link";
import Bookmarks from "./Bookmarks";
import AddRecipeForm from "./AddRecipeForm";

import { IoBookmarkOutline, IoCreateOutline } from "react-icons/io5";

export default function Topbar() {
  const { bookmarks } = useContext(FoodContext);
  const [hover, setHover] = useState(false);
  const hoverTrue = () => setHover(true);
  const hoverFalse = () => setHover(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Gi
        bg="gray.light"
        colSpan="2"
        as={HStack}
        justify="space-between"
        px={12}
        spacing={16}
        textTransform="uppercase"
        pos="relative"
      >
        <Link href="/" passHref>
          <Image src="/logo.png" alt="logo" h="2.7rem" cursor="pointer" />
        </Link>

        <Search />
        <HStack spacing={0} h="100%">
          <ActionBar icon={IoCreateOutline} onClick={onOpen}>
            Add Recipe
          </ActionBar>
          <ActionBar
            icon={IoBookmarkOutline}
            onMouseEnter={hoverTrue}
            onMouseLeave={hoverFalse}
          >
            Bookmarks
          </ActionBar>
        </HStack>
        <Bookmarks
          hoverTrue={hoverTrue}
          hoverFalse={hoverFalse}
          hover={hover}
          bookmarks={bookmarks}
        />
      </Gi>
      <AddRecipeForm isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
