import { Stack, SimpleGrid, Icon, Input, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import logoSmall from "assets/logo-small.png";

export default function Nav() {
  return (
    <Stack
      as="nav"
      bg="primary.500"
      justify="center"
      paddingBlockEnd={2}
      paddingBlockStart={1}
      width="full"
    >
      <Stack
        align="center"
        borderBlockEnd="1px solid"
        borderColor="blackAlpha.200"
        direction="row"
        justify="center"
        paddingBlockEnd={1}
        paddingInlineStart={2}
        spacing={1}
      >
        <Image fit="cover" height="32px" marginInlineEnd={2} src={logoSmall} width="44px" />
        <Stack
          align="center"
          bg="white"
          boxShadow="base"
          direction="row"
          height="32px"
          p={0}
          paddingInlineStart={2}
          spacing={0}
          width="full"
        >
          <label htmlFor="searchbar">
            <SimpleGrid placeItems="center" width="20px">
              <Icon as={BsSearch} color="blackAlpha.500" h="18px" w="13px" />
            </SimpleGrid>
          </label>
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
        </Stack>
        <Stack direction="row" p={0} spacing={0}>
          <Button minHeight="35px" minWidth="45px" variant="unstyled">
            <Icon as={AiOutlineMenu} h="25px" w="25px" />
          </Button>
          <Button minHeight="35px" minWidth="45px" variant="unstyled">
            <Icon as={BsCart2} h="35px" w="25px" />
          </Button>
        </Stack>
      </Stack>
      <Stack align="center" direction="row" justify="space-between" paddingInline={2}>
        <Stack align="center" direction="row" spacing={1}>
          <Icon as={BiMap} marginBlockEnd={2} />
          <Text color="blackAlpha.600" fontSize={13}>
            Enviar a Capital Federal
          </Text>
        </Stack>
        <Button height="fit-content" minWidth="fit-content" variant="unstyled">
          <Icon as={IoIosArrowForward} color="blackAlpha.500" />
        </Button>
      </Stack>
    </Stack>
  );
}
