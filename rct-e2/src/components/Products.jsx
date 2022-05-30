import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}</Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
