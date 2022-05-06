import { Stack, SimpleGrid, Icon, Input, Button, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import logo from "assets/logo.png";
import mlPromo from "assets/ml-promo.webp";

export default function Nav() {
  return (
    <Stack
      align="center"
      as="nav"
      bg="primary.500"
      paddingBlockEnd={2}
      paddingBlockStart={2}
      width="full"
    >
      <Stack
        align="center"
        direction="row"
        maxWidth="1200px"
        paddingBlockEnd={1}
        spacing={14}
        width="full"
      >
        <Image fit="cover" height="34px" src={logo} width="134px" />
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
              <Icon as={BsSearch} color="blackAlpha.600" h="21px" marginBlockStart={-1} w="16px" />
            </SimpleGrid>
          </label>
        </Stack>
        <Stack direction="row" p={0} spacing={0}>
          <Link href="#" width="340px">
            <Image fit="cover" height="39px" src={mlPromo} width="340px" />
          </Link>
        </Stack>
      </Stack>

      <Stack
        align="center"
        direction="row"
        justify="space-between"
        paddingInlineEnd={1}
        paddingInlineStart={2}
      >
        <Stack align="center" direction="row" spacing={1}>
          <Icon as={BiMap} marginBlockEnd={2} />
          <Text color="blackAlpha.600" fontSize={13}>
            Enviar a Capital Federal
          </Text>
        </Stack>
        <Button height="fit-content" minWidth="fit-content" variant="unstyled">
          <Icon as={IoIosArrowForward} color="blackAlpha.500" marginBlockEnd={1} />
        </Button>
      </Stack>
    </Stack>
  );
}
