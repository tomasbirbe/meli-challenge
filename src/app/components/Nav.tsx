import { Stack, SimpleGrid, Icon, Input, Image, Text, Link, Box } from "@chakra-ui/react";
import React from "react";
import { BsCart2, BsSearch } from "react-icons/bs";
import logo from "assets/tomas-birbe.svg";
import mlPromo from "assets/ml-promo.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  return (
    <Stack align="center" as="nav" bg="primary.500" boxShadow="base" paddingBlock={2} width="full">
      <Box maxWidth="1200px">
        <Stack
          align="center"
          direction="row"
          marginBlockEnd={2}
          paddingBlockEnd={1}
          spacing={14}
          width="full"
        >
          <Box height="34px" width="134px">
            <Image fit="contain" height="34px" src={logo} width="134px" />
          </Box>
          <Stack
            align="center"
            bg="white"
            boxShadow="base"
            direction="row"
            height="39px"
            p={0}
            paddingInlineStart={2}
            spacing={0}
            width="598px"
          >
            <Input
              _active={{}}
              _focus={{}}
              _hover={{}}
              bg="transparent"
              border="none"
              borderRadius={0}
              id="searchbar"
              padding={0}
              paddingInline={2}
              placeholder="Buscar productos, marcas y mas..."
            />
            <label htmlFor="searchbar">
              <SimpleGrid
                borderLeft="1px"
                borderLeftColor="blackAlpha.300"
                height="25px"
                placeItems="center"
                width="46px"
              >
                <Icon
                  as={BsSearch}
                  color="blackAlpha.600"
                  h="21px"
                  marginBlockStart={-1}
                  w="16px"
                />
              </SimpleGrid>
            </label>
          </Stack>
          <Stack direction="row" p={0} spacing={0}>
            <Link href="#" width="340px">
              <Image fit="cover" height="39px" src={mlPromo} width="340px" />
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" justify="space-between" marginBlockStart={3}>
          <Stack direction="row" paddingInlineEnd={1}>
            <Stack align="flex-end" direction="row" spacing="70px">
              <Stack align="center" direction="row" spacing={1}>
                <Icon as={FaMapMarkerAlt} boxSize={5} color="blackAlpha.700" marginBlockEnd={2} />
                <Stack lineHeight={1.1} spacing={0}>
                  <Text color="blackAlpha.600" fontSize="12px">
                    Enviar a
                  </Text>
                  <Text color="blackAlpha.900" fontSize="14px">
                    Capital Federal
                  </Text>
                </Stack>
              </Stack>

              <Stack direction="row" fontSize="14px" spacing={4}>
                <Stack direction="row">
                  <Link color="blackAlpha.600">Categorias</Link>
                  <Icon as={IoIosArrowDown} />
                </Stack>
                <Link color="blackAlpha.600">Ofertas</Link>
                <Link color="blackAlpha.600">Historial</Link>
                <Link color="blackAlpha.600">Supermercado</Link>
                <Link color="blackAlpha.600">Moda</Link>
                <Link color="blackAlpha.600">Vender</Link>
                <Link color="blackAlpha.600">Ayuda</Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack align="flex-end" direction="row" fontSize="14px" spacing={6}>
            <Link color="blackAlpha.800">Crea tu cuenta</Link>
            <Link color="blackAlpha.800">Ingresa</Link>
            <Link color="blackAlpha.800">Mis compras</Link>
            <Link color="blackAlpha.800">
              <Icon as={BsCart2} boxSize={5} marginBlockStart={-2} />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
