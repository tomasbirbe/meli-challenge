import { Stack, Link, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function PromotedProducts() {
  return (
    <>
      <Stack paddingInline={4} spacing={6}>
        <Stack align="flex-end" direction="row" paddingBlock={4}>
          <Text as="h2" fontSize="18px">
            Productos promocionados
          </Text>
          <Link fontSize="14px">Anuncia aqui</Link>
        </Stack>
        <Stack spacing={6}>
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
              <Text fontSize="20px">$ 1590</Text>
              <Text color="green.400" fontSize="14px" fontWeight="bold">
                Envio gratis
              </Text>
              <Text fontSize="14px" paddingBlockStart={1} variant="truncateMultiline">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Box>
          </Stack>
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
              <Text fontSize="20px">$ 1590</Text>
              <Text color="green.400" fontSize="14px" fontWeight="bold">
                Envio gratis
              </Text>
              <Text fontSize="14px" paddingBlockStart={1} variant="truncateMultiline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa nulla itaque
                cumque error ut voluptates dolores ipsum dolor recusandae delectus velit porro
                assumenda accusamus, corrupti magnam officia? Atque, aspernatur?
              </Text>
            </Box>
          </Stack>
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
              <Text fontSize="20px">$ 1590</Text>
              <Text color="green.400" fontSize="14px" fontWeight="bold">
                Envio gratis
              </Text>
              <Text fontSize="14px" paddingBlockStart={1} variant="truncateMultiline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, debitis
                temporibus unde quam nostrum nemo, maiores amet quis, eum nihil illo quaerat culpa
                voluptates ut obcaecati aperiam error necessitatibus asperiores.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
