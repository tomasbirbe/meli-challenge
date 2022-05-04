import { Stack, Box, Text, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

interface Props {
  basePrice?: number;
  price: number;
  discount?: number;
  freeShip?: boolean;
  description: string;
  image: string;
  offerOfDay?: boolean;
  isFullShip?: boolean;
  installments?: number;
}

export default function ProductCard({
  basePrice,
  price,
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
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.50"
        flexShrink={0}
        height="362px"
        spacing={0}
        width="226px"
      >
        <Image
          height="224px"
          src="https://http2.mlstatic.com/D_Q_NP_707872-MLA47429171779_092021-V.webp"
          width="224px"
        />
        <Stack
          borderBlockStart="1px"
          borderColor="blackAlpha.200"
          paddingBlock={4}
          paddingInline={4}
          spacing={0}
        >
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

          {basePrice && (
            <Text as="s" color="blackAlpha.500" fontSize="12px">
              ${basePrice}
            </Text>
          )}
          <Stack align="center" direction="row">
            <Text fontSize="20px">${price}</Text>
            {discount > 0 && (
              <Text color="green.500" fontSize="14px">
                {discount}% OFF
              </Text>
            )}
          </Stack>
          {installments > 0 && (
            <Text color="green.500" fontSize={12}>
              Hasta {installments} cuotas sin interés
            </Text>
          )}

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
          <Text fontSize="14px" variant="truncateMultiline">
            {description}
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
