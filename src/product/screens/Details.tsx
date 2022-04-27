import React from "react";
import { Box, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

import { Product } from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

export default function DetailScreen({ product = mock.product }: Props) {
  return (
    <Box paddingBlock={4} paddingInline={4}>
      <Stack spacing={0}>
        <Text color="blackAlpha.600" fontSize={12} marginBlockEnd={2}>
          Nuevo | 1024 vendidos
        </Text>
        <Text lineHeight={1.3} marginBlockEnd={1}>
          {product.title}
        </Text>
        <Stack align="center" color="blue.500" direction="row" spacing={1}>
          <Icon as={BsStarFill} boxSize={2.5} />
          <Icon as={BsStarFill} boxSize={2.5} />
          <Icon as={BsStarFill} boxSize={2.5} />
          <Icon as={BsStarFill} boxSize={2.5} />
          <Icon as={BsStarHalf} boxSize={2.5} />
          <Text color="blackAlpha.600" fontSize={14} paddingInlineStart={1}>
            53 opiniones
          </Text>
        </Stack>
        <Stack align="center" direction="row" paddingBlockStart={2}>
          <Text
            bg="orange.500"
            borderRadius={3}
            color="white"
            fontSize={10}
            paddingInline={1}
            width="fit-content"
          >
            MÁS VENDIDO
          </Text>
          <Text color="blue.500" fontSize={12}>
            7° en peluches
          </Text>
        </Stack>
        <Stack direction="row" height="256px" overflowX="auto" width="full">
          {product.pictures?.map((picture) => {
            return (
              <Image
                key={picture.id}
                height="256px"
                loading="lazy"
                src={picture.url}
                width="256px"
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
