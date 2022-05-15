import { Stack, Link, Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";
import formatPrice from "src/utils/formatPrice";
import mercadoShopsLogo from "src/assets/mercado-shops-logo.svg";

export default function MercadoShop() {
  return (
    <>
      <Stack spacing={0}>
        <Stack align="center" bg="#e82e8a" borderTopRadius="8px" height="120px" spacing={0}>
          <Image height="60px" src={mercadoShopsLogo} width="150px" />
          <Text color="white" fontSize="16px" fontWeight="bold">
            Compra en tiendas fuera de MercadoLire
          </Text>
        </Stack>
        <Box bg="#f5f5f5" borderBottomRadius="8px" padding={0}>
          <Grid
            justifyItems="center"
            marginBlockStart="-24px"
            paddingBlockEnd={2}
            rowGap="15px"
            templateColumns="repeat(2, 1fr)"
          >
            <GridItem>
              <Stack bg="white" borderRadius="8px" width="160px">
                <Stack
                  align="center"
                  bg="#ededed"
                  borderTopRadius="8px"
                  height="38px"
                  justify="center"
                  width="160px"
                >
                  <Text fontSize="10px" fontWeight="bold">
                    KINDERLAND OFICIAL
                  </Text>
                </Stack>
                <Stack height="244px" lineHeight="15px" paddingInline={3}>
                  <Image
                    alignSelf="center"
                    height="103px"
                    src="https://http2.mlstatic.com/D_Q_NP_635838-MLA47526295793_092021-AB.webp"
                    width="99px"
                  />
                  <Text fontSize="12px" variant="truncateMultiline">
                    Transformer Auto Robot Convertible Bumblebee Muñeco
                  </Text>
                  <Text fontSize="14px">{formatPrice(1500)}</Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack bg="white" borderRadius="8px" width="160px">
                <Stack
                  align="center"
                  bg="#ededed"
                  borderTopRadius="8px"
                  height="38px"
                  justify="center"
                  width="160px"
                >
                  <Text fontSize="10px" fontWeight="bold">
                    KINDERLAND OFICIAL
                  </Text>
                </Stack>
                <Stack height="244px" lineHeight="15px" paddingInline={3}>
                  <Image
                    alignSelf="center"
                    height="103px"
                    src="https://http2.mlstatic.com/D_Q_NP_635838-MLA47526295793_092021-AB.webp"
                    width="99px"
                  />
                  <Text fontSize="12px" variant="truncateMultiline">
                    Transformer Auto Robot Convertible Bumblebee Muñeco
                  </Text>
                  <Text fontSize="14px">{formatPrice(1500)}</Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack bg="white" borderRadius="8px" width="160px">
                <Stack
                  align="center"
                  bg="#ededed"
                  borderTopRadius="8px"
                  height="38px"
                  justify="center"
                  width="160px"
                >
                  <Text fontSize="10px" fontWeight="bold">
                    KINDERLAND OFICIAL
                  </Text>
                </Stack>
                <Stack height="244px" lineHeight="15px" paddingInline={3}>
                  <Image
                    alignSelf="center"
                    height="103px"
                    src="https://http2.mlstatic.com/D_Q_NP_635838-MLA47526295793_092021-AB.webp"
                    width="99px"
                  />
                  <Text fontSize="12px" variant="truncateMultiline">
                    Transformer Auto Robot Convertible Bumblebee Muñeco
                  </Text>
                  <Text fontSize="14px">{formatPrice(1500)}</Text>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
          <Stack
            align="center"
            direction="row"
            fontSize="12px"
            justify="center"
            paddingBlockEnd={2}
            width="full"
          >
            <Link>Anuncia aqui</Link>
            <Text color="blackAlpha.400" fontSize="16px">
              |
            </Text>
            <Link>Crea tu Mercado Shop</Link>
          </Stack>
        </Box>
        <Stack spacing={0} sx={{ gap: "10px" }} />
      </Stack>
    </>
  );
}
