import React, { useRef } from "react";
import ModalUI from "../UI/Modal";
import { Grid, Button } from "@chakra-ui/react";
import AddRecipeFormBox from "./AddRecipeForm/AddRecipeFormBox";
import ArfInp from "./AddRecipeForm/AddRecipeFormInput";
import { transformUploadData, catchAsync } from "../../lib/helper";
import { postFoodData } from "../../lib/food-api";

export default function AddRecipeForm({ isOpen, onClose }) {
  const formRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    catchAsync(async () => {
      await postFoodData(transformUploadData(formData));
      alert("Done uploading!");
      onClose();
    });
  };

  return (
    <ModalUI title="Add Recipe" size="5xl" isOpen={isOpen} onClose={onClose}>
      <Grid
        templateColumns="1fr 1fr"
        rowGap={8}
        p={8}
        ref={formRef}
        as="form"
        onSubmit={submitHandler}
      >
        <AddRecipeFormBox title="Recipe Data" mr={12}>
          <ArfInp title={"Title"} id="title" name="title" required />
          <ArfInp title={"URL"} id="url" name="sourceUrl" required />
          <ArfInp title={"Image URL"} id="imageUrl" name="image" required />
          <ArfInp
            title={"Publisher"}
            id="publisher"
            name="publisher"
            required
          />
          <ArfInp
            title={"Prep time"}
            id="cookingTime"
            type="number"
            name="cookingTime"
            placeholder="Minutes"
            required
          />
          <ArfInp
            title={"Servings"}
            id="servings"
            type="number"
            name="servings"
            required
          />
        </AddRecipeFormBox>
        <AddRecipeFormBox title="Ingredients">
          <ArfInp
            title={"Ingredient 1"}
            id="ing1"
            name="ing1"
            placeholder="Format: 'Quantity,Unit,Description'"
            required
          />

          <ArfInp
            title={"Ingredient 2"}
            id="ing2"
            name="ing2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <ArfInp
            title={"Ingredient 3"}
            id="ing3"
            name="ing3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <ArfInp
            title={"Ingredient 4"}
            id="ing4"
            name="ing4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <ArfInp
            title={"Ingredient 5"}
            id="ing5"
            name="ing5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <ArfInp
            title={"Ingredient 6"}
            id="ing6"
            name="ing6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </AddRecipeFormBox>
        <Button
          gridColumn="1/-1"
          justifySelf="center"
          type="submit"
          size="lg"
          borderRadius="full"
        >
          Upload
        </Button>
      </Grid>
    </ModalUI>
  );
}
