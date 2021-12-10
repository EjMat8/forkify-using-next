import React from "react";
import { Grid } from "@chakra-ui/react";
import HomeItem from "./HomeItem";
export default function HomeList({ food }) {
  return (
    <Grid p={6} templateColumns="repeat(auto-fill, minmax(20rem, 1fr))" gap={4}>
      {food.map((el) => (
        <HomeItem key={el.id} {...el} imageUrl={el.image_url} />
      ))}
    </Grid>
  );
}
