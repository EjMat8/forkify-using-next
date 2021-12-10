import React from "react";
import { Grid, Heading } from "@chakra-ui/react";
export default function AddRecipeFormBox({ title, children, ...props }) {
  return (
    <Grid
      mr={8}
      spacing={4}
      {...props}
      templateColumns="10rem 1fr"
      rowGap={8}
      alignContent="start"
    >
      <Heading gridColumn="1/-1" mb={4}>
        {title}
      </Heading>
      {children}
    </Grid>
  );
}
