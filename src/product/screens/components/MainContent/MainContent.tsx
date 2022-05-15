import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import type { Product } from "src/product/types";

import Gallery from "./components/Gallery";
import Attributes from "./components/Attributes";
import Comments from "./components/Comments";
import ProductsCarousel from "./components/ProductsCarousel";
import Description from "./components/Description";

export function MainContent({ product }: { product: Product }) {
  return (
    <>
      <Stack as="main" minWidth="768px" spacing={0}>
        <Gallery product={product} />
        <Stack paddingInlineStart="50px">
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
          <Stack borderBlockEnd="1px" borderColor="blackAlpha.200" paddingBlock="40px" spacing={5}>
            <Attributes product={product} />
          </Stack>
          <Stack paddingBlockStart="40px">
            <Description />
          </Stack>
          <Stack spacing={6}>
            <Comments />
            <Text color="blue.500" fontSize="14px">
              Ver todas las preguntas
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
