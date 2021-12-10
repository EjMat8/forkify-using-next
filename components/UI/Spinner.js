import React from "react";
import { Spinner as Spin } from "@chakra-ui/react";

const Spinner = (props) => {
  return <Spin color="brand.200" size="xl" speed="0.8s" {...props} />;
};

export default Spinner;
