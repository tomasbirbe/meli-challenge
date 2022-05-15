import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import type { Product } from "src/product/types";

import { Header } from "./components/Header";
import Gallery from "./components/Gallery";
import Attributes from "./components/Attributes";
import Comments from "./components/Comments";
import Description from "./components/Description";

export function MainContent({ product }: { product: Product }) {
  return (
    <>
      <Stack as="main" minWidth="768px" spacing={0}>
        <Gallery product={product} />
        <Stack paddingInlineStart="50px">
          <Header />
          <Attributes product={product} />
          <Description />
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
