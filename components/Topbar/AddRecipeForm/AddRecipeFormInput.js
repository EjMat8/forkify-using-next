import React from "react";
import { FormLabel, Input } from "@chakra-ui/react";
export default function AddRecipeFormInput({ id, title, type, ...props }) {
  return (
    <React.Fragment>
      <FormLabel fontSize="lg" htmlFor={id}>
        {title}
      </FormLabel>
      <Input
        id={id}
        type={type || "text"}
        placeholder={props.placeholder || ""}
        name={props.name || ""}
        required={props.required || false}
        sx={{ "&::placeholder": { fontSize: "sm" } }}
      />
    </React.Fragment>
  );
}
