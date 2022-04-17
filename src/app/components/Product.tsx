import { Stack, Box, Text, Image, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

interface Props {
  prevPrice?: number;
  priceToBuy: number;
  discount?: number;
  freeShip?: boolean;
  description: string;
  image: string;
  offerOfDay: boolean;
  isFullShip: boolean;
  installments: number;
}

export default function Category({
  prevPrice,
  priceToBuy,
  discount = 0,
  freeShip = false,
  description,
  isFullShip = false,
  image,
  installments = 0,
  offerOfDay = false,
}: Props) {
  return (
    <>
      <Stack
        border="1px solid"
        borderColor="blackAlpha.50"
        height="347px"
        justify="flex-start"
        paddingInline={4}
        width="160px"
      >
        <Image
          height="144px"
          src="https://http2.mlstatic.com/D_Q_NP_707872-MLA47429171779_092021-V.webp"
          width="144px"
        />
        <Stack spacing={0}>
          {offerOfDay && (
            <Text
              bg="secondary.500"
              borderRadius="3px"
              color="white"
              fontSize={12}
              marginBlockEnd={2}
              paddingInline={1}
              width="fit-content"
            >
              OFERTA DEL DIA
            </Text>
          )}

          {prevPrice && (
            <Text as="s" color="blackAlpha.500" fontSize="12px">
              ${prevPrice}
            </Text>
          )}
          <Stack direction="row">
            <Text fontSize="20px">${priceToBuy}</Text>
            {discount > 0 && (
              <Text color="green.500" fontSize="14px">
                {discount}% OFF
              </Text>
            )}
          </Stack>
          <Text color="green.500" fontSize={12}>
            Hasta {installments} cuotas sin interés
          </Text>
          <Stack align="center" direction="row" spacing={1}>
            {freeShip && (
              <Text color="green.500" fontSize="12px" width="fit-content">
                Envio gratis
              </Text>
            )}
            {isFullShip && (
              <Box color="green.500" direction="row" display="inline" width="fit-content">
                <Icon as={AiFillThunderbolt} />
                <Text as="i" display="inline" fontSize={12} fontWeight="bold">
                  FULL
                </Text>
              </Box>
            )}
          </Stack>
          <Text fontSize="14px" wordBreak="break-word">
            {description}
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
