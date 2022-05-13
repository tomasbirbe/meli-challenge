import { Stack, Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import type { Product } from "src/product/types";

export default function Gallery({ product }: { product: Product }) {
  const [pictureSelected, setPictureSelected] = useState(product.pictures[0]);

  return (
    <>
      <Stack direction="row" height="550px">
        <Stack paddingInlineStart={4} spacing={2}>
          {product.pictures.map((picture) => {
            return (
              <Box
                key={picture.id}
                borderRadius="4px"
                cursor="pointer"
                outline={picture.id === pictureSelected.id ? "2px solid" : "1px solid"}
                outlineColor={picture.id === pictureSelected.id ? "blue.500" : "blackAlpha.400"}
                padding={0.5}
                width="fit-content"
                onMouseOver={() => setPictureSelected(picture)}
              >
                <Image fit="contain" height="44px" src={picture.url} width="44px" />
              </Box>
            );
          })}
        </Stack>
        <Stack paddingBlockStart={10}>
          <Image
            fit="contain"
            height="468px"
            objectPosition="center"
            src={pictureSelected.url}
            width="668px"
          />
        </Stack>
      </Stack>
    </>
  );
}
