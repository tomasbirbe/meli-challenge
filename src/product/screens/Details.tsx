import React from "react";
import { Link, Stack, Text } from "@chakra-ui/react";

import { Product } from "../types";
import mock from "../mock";

import { Aside } from "./components/Aside";
import { MainContent } from "./components/MainContent";
import { Header } from "./components/Header";
interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <>
      <Header />

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
