import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import type { Product } from "src/product/types";

import PucharseInfo from "./components/PucharseInfo";
import SellerInfo from "./components/SellerInfo";
import RefundInfo from "./components/RefundInfo";
import PromotedProducts from "./components/PromotedProducts";
import MercadoShop from "./components/MercadoShop";

export function Aside({ product }: { product: Product }) {
  return (
    <>
      <Box as="aside" position="relative">
        <Stack
          paddingInlineEnd={4}
          paddingInlineStart={12}
          position="sticky"
          spacing={4}
          top="15px"
        >
          <PucharseInfo product={product} />
          <Stack
            border="1px"
            borderColor="blackAlpha.300"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={4}
            spacing={2}
          >
            <SellerInfo product={product} />
          </Stack>
          <Stack
            border="1px"
            borderColor="blackAlpha.300"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={0}
            spacing={2}
          >
            <RefundInfo />
          </Stack>
          <Stack
            border="1px"
            borderColor="blackAlpha.300"
            borderRadius="8px"
            paddingBlockEnd={10}
            paddingBlockStart={6}
            paddingInline={0}
            spacing={2}
          >
            <PromotedProducts />
          </Stack>

          <MercadoShop />
        </Stack>
      </Box>
    </>
  );
}
