import { Stack, Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Gallery({ product }) {
  const [pictureSelected, setPictureSelected] = useState(product.pictures[0].url);

  return (
    <>
      <Stack direction="row">
        <Stack paddingInlineStart={4} spacing={2}>
          {product.pictures.map((picture) => {
            return (
              <Box
                key={picture.id}
                border="1px"
                borderColor="blackAlpha.300"
                borderRadius="4px"
                padding={0.5}
                width="fit-content"
              >
                <Image fit="cover" height="44px" src={picture.url} width="44px" />
              </Box>
            );
          })}
        </Stack>
        <Box paddingBlock={10} paddingInline={4}>
          <Image fit="cover" height="468px" src={pictureSelected} width="668px" />
        </Box>
      </Stack>
    </>
  );
}
