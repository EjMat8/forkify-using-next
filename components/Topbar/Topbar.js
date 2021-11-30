import { GridItem as Gi, HStack, Image } from "@chakra-ui/react";
import Search from "./Search";
import ActionBar from "./ActionBar";

import {
  IoBookmarkOutline,
  IoBookmark,
  IoCreateOutline,
} from "react-icons/io5";

export default function Topbar() {
  return (
    <Gi
      bg="gray.light"
      colSpan="2"
      as={HStack}
      justify="space-between"
      px={12}
      spacing={16}
      textTransform="uppercase"
    >
      <Image src="/logo.png" alt="logo" h="2.7rem" />

      <Search />
      <HStack spacing={0} h="100%">
        <ActionBar icon={IoCreateOutline}>Add Recipe</ActionBar>
        <ActionBar icon={IoBookmarkOutline}>Bookmarks</ActionBar>
      </HStack>
    </Gi>
  );
}
