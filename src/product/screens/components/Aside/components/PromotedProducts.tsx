import { Stack, Link, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import formatprice from "src/utils/formatPrice";

function Product() {
  return (
    <Stack direction="row">
      <Image
        border="1px"
        borderColor="blackAlpha.200"
        borderRadius="4px"
        fit="contain"
        height="82px"
        loading="lazy"
        src="https://http2.mlstatic.com/D_Q_NP_2X_812266-MLA49030257808_022022-AB.webp"
        width="82px"
      />
      <Box lineHeight="18px" overflow="hidden">
        <Text fontSize="20px">{formatprice(1590)}</Text>
        <Text color="green.400" fontSize="14px" fontWeight="bold">
          Envio gratis
        </Text>
        <Text fontSize="14px" paddingBlockStart={1} variant="truncateMultiline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Box>
    </Stack>
  );
}

export default function PromotedProducts() {
  return (
    <Stack
      border="1px"
      borderColor="blackAlpha.300"
      borderRadius="8px"
      paddingBlockEnd={10}
      paddingBlockStart={6}
      paddingInline={0}
      spacing={2}
    >
      <Stack paddingInline={4} spacing={6}>
        <Stack align="flex-end" direction="row" paddingBlock={4} width="318px">
          <Text as="h2" fontSize="18px">
            Productos promocionados
          </Text>
          <Link fontSize="14px">Anuncia aqui</Link>
        </Stack>
        <Stack spacing={6}>
          <Product />
          <Product />
          <Product />
        </Stack>
      </Stack>
    </Stack>
  );
}
