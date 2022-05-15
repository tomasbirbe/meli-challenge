import React, { useEffect } from "react";
import { Stack, Icon, Box, Link, Text } from "@chakra-ui/react";
import { BiCommentCheck } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { RiMapPin2Line, RiMedalLine } from "react-icons/ri";
import type { Product } from "src/product/types";

export default function SellerInfo({ product }: { product: Product }) {
  useEffect(() => {
    console.log(product.seller_address.city.name);
  }, []);

  return (
    <>
      <Text as="h2" fontSize="18px">
        Informacion del vendedor
      </Text>
      <Stack paddingBlockStart={4} spacing={4}>
        <Stack direction="row">
          <Icon as={RiMapPin2Line} boxSize="18px" marginBlockStart={0.5} />
          <Stack spacing={0}>
            <Text>Ubicacion</Text>
            <Text color="blackAlpha.500" fontSize="14px">
              {product.seller_address.city.name},&nbsp;{product.seller_address.state.name},&nbsp;
              {product.seller_address.country.name}
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Icon as={RiMedalLine} boxSize="18px" color="green.500" marginBlockStart={0.5} />
          <Stack spacing={0}>
            <Text color="green.500">MercadoLibre Platinum</Text>
            <Text color="blackAlpha.500" fontSize="14px">
              ¡Es uno de los mejores del sitio!
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Box bg="#de6260" height="8px" width="20%" />
          <Box bg="#ebb461" height="8px" width="20%" />
          <Box bg="#f7ec56" height="8px" width="20%" />
          <Box bg="#bafb3d" height="8px" width="20%" />
          <Box bg="#68b744" height="8px" width="20%" />
        </Stack>

        <Stack
          direction="row"
          fontSize="12px"
          justify="space-between"
          lineHeight="1"
          paddingBlockStart={2}
          spacing={0}
          textAlign="center"
        >
          <Stack
            align="center"
            borderInlineEnd="1px"
            borderInlineEndColor="blackAlpha.300"
            spacing={4}
            width="100%"
          >
            <Text fontSize="24px">3995</Text>
            <Text color="blackAlpha.800" maxWidth="96px">
              Ventas en los últimos 60 días
            </Text>
          </Stack>
          <Stack
            align="center"
            borderInlineEnd="1px"
            borderInlineEndColor="blackAlpha.300"
            spacing={3}
            width="100%"
          >
            <Icon as={BiCommentCheck} boxSize="27px" color="#68b744" />
            <Text color="blackAlpha.800" maxWidth="96px">
              Brinda buena atención
            </Text>
          </Stack>
          <Stack align="center" spacing={2} width="100%">
            <Icon as={MdTimer} boxSize="30px" color="#68b744" />
            <Text color="blackAlpha.800" maxWidth="96px">
              Despacha sus productos a tiempo
            </Text>
          </Stack>
        </Stack>
        <Box paddingBlockStart={4}>
          <Link fontSize="14px">Ver mas datos de este vendedor</Link>
        </Box>
      </Stack>
    </>
  );
}
