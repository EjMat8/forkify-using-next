import { Box, Grid, GridItem as Gi } from "@chakra-ui/react";
import FoodResultList from "./FoodResults/FoodResultList";
import Topbar from "./Topbar/Topbar";
export default function Layout({ children }) {
  return (
    <Box
      minH="100vh"
      w="100%"
      bgGradient="linear(to-br, brand.100,brand.300)"
      pt={12}
      px={36}
      pb={32}
    >
      <Grid
        templateColumns="25rem 1fr"
        templateRows="5.5rem 1fr"
        minH="70rem"
        maxW="114rem"
        borderRadius="xl"
        backgroundColor="violet"
        overflow="hidden"
        boxShadow="xl"
      >
        <Topbar />
        <Gi bg="white" color="brand.text" px={2} pos="relative">
          <FoodResultList />
        </Gi>
        <Gi bg="gray.light">{children}</Gi>
      </Grid>
    </Box>
  );
}
