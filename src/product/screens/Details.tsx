import React from "react";
import { Link, Stack, Text } from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";

import { Aside } from "./components/Aside";
import { MainContent } from "./components/MainContent";
interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <>
      <Stack marginBlockEnd={2} paddingBlockStart={5} spacing={5}>
        <Text fontSize="14px">
          <b>También puede interesarte:</b> peluches gigantes - encanto disney - peluche - unicornio
        </Text>
        <Stack direction="row" justify="space-between">
          <Stack direction="row" spacing={3}>
            <Text fontSize="14px">Volver al listado</Text>
            <Text color="blackAlpha.500"> | </Text>
            <Text fontSize="14px">
              <Link>Juegos y juguetes</Link> {">"} <Link>Peluches</Link> {">"}
              <Link>Stitch</Link>
            </Text>
          </Stack>
          <Stack align="center" direction="row" fontSize="14px" spacing={3}>
            <Link>Compartir</Link>
            <Text color="blackAlpha.400" fontSize="16px">
              |
            </Text>
            <Link>Vender uno igual</Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        bg="white"
        borderRadius="4px"
        boxShadow="base"
        direction="row"
        paddingBlockEnd="60px"
        paddingBlockStart={4}
        spacing={0}
      >
        <MainContent product={product} />
        <Aside product={product} />
      </Stack>

      <Stack direction="row" justify="flex-end" paddingBlock={4}>
        <Text fontSize={14}>
          Publicacion <b>#1114686147</b>
        </Text>
        <Text fontSize={14}>|</Text>
        <Link fontSize={14}>Denunciar</Link>
      </Stack>
    </>
  );
};

export default DetailsScreen;
