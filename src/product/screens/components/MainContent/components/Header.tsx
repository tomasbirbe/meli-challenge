import { Stack, Text, Link } from "@chakra-ui/react";
import React from "react";

import ProductsCarousel from "./ProductsCarousel";
export function Header({}) {
  return (
    <Stack
      borderBlockStart="1px solid"
      borderBlockStartColor="blackAlpha.200"
      paddingBlock="40px"
      spacing={5}
    >
      <Text as="h2" fontSize="24px" fontWeight={400}>
        Publicaciones del vendedor
      </Text>
      <ProductsCarousel products={[]} />
      <Link color="blue.600" fontSize={14}>
        Ver más publicaciones del vendedor
      </Link>
    </Stack>
  );
}
