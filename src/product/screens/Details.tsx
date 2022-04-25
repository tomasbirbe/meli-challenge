import React, { useState } from "react";
import { Box, Button, Divider, Image, Link, Stack, Text } from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  const [pictureSelected, setPictureSelected] = useState(product.pictures[0].url);

  return (
    <>
      <Stack marginBlockEnd={2} paddingBlockStart={7} spacing={5}>
        <Text fontSize="14px">
          <b>También puede interesarte:</b> peluches gigantes - encanto disney - peluche - unicornio
        </Text>
        <Stack direction="row" spacing={3}>
          <Text fontSize="14px">Volver al listado</Text>
          <Text color="blackAlpha.500"> | </Text>
          <Text fontSize="14px">
            <Link>Juegos y juguetes</Link> {">"} <Link>Peluches</Link> {">"}
            <Link>Stitch</Link>
          </Text>
        </Stack>
      </Stack>

      <Stack bg="white" borderRadius="4px" boxShadow="base" paddingBlockStart={4}>
        {/* Main content */}
        <Stack as="main" width="768px">
          <Stack align="flex-end">
            {/* Photos viewer */}

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

            <Stack paddingBlockStart="40px" width="718px">
              <Text fontSize="24px" fontWeight={400}>
                Publicaciones del vendedor
              </Text>
              <Stack position="relative">
                <Stack direction="row" overflow="auto" paddingInline={2} width="full">
                  <Button left="-15px" position="absolute" top="calc(50% - 20px)">
                    {"<"}
                  </Button>
                  <Stack bg="green" height="346px">
                    <Box height="224px" width="224px" />
                    <Text>Precio</Text>
                    <Text>Descripcion</Text>
                  </Stack>
                  <Stack bg="green" height="346px">
                    <Box height="224px" width="224px" />
                    <Text>Precio</Text>
                    <Text>Descripcion</Text>
                  </Stack>
                  <Stack bg="green" height="346px">
                    <Box height="224px" width="224px" />
                    <Text>Precio</Text>
                    <Text>Descripcion</Text>
                  </Stack>
                  <Stack bg="green" height="346px">
                    <Box height="224px" width="224px" />
                    <Text>Precio</Text>
                    <Text>Descripcion</Text>
                  </Stack>
                  <Stack bg="green" height="346px">
                    <Box height="224px" width="224px" />
                    <Text>Precio</Text>
                    <Text>Descripcion</Text>
                  </Stack>
                  <Button position="absolute" right="-15px" top="calc(50% - 20px)">
                    {">"}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>Aside</Stack>
      </Stack>
    </>
  );
};

export default DetailsScreen;
