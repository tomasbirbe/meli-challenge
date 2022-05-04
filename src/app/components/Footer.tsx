import { Box, Button, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

export default function Footer() {
  return (
    <Stack align="center" spacing={0}>
      <Button
        bg="white"
        borderBottomRadius="0"
        borderTopRadius="5px"
        color="blackAlpha.800"
        fontSize="13px"
        fontWeight={400}
        height="32px"
        paddingInline={4}
        width="fit-content"
      >
        Mas informacion
        <Icon as={RiArrowUpSLine} boxSize={5} />
      </Button>
      <Stack bg="white" height="87px" lineHeight={1} width="full">
        <Stack fontSize="12px" marginInline="auto" paddingBlockStart={4} spacing={3} width="1180px">
          <Stack as="nav" direction="row" fontSize="13px" spacing={4} width="fit-content">
            <Link color="blackAlpha.900">Trabaja con nosotros</Link>
            <Link color="blackAlpha.900">Términos y condiciones</Link>
            <Link color="blackAlpha.900">Cómo cuidamos tu privacidad</Link>
            <Link color="blackAlpha.900">Información al usuario financiero</Link>
            <Link color="blackAlpha.900">Ayuda</Link>
            <Link color="blackAlpha.900">Defensa del Consumidor</Link>
            <Link color="blackAlpha.900">Información sobre seguros</Link>
          </Stack>
          <Stack>
            <Text color="blackAlpha.600" width="fit-content">
              Copyright © 1999-2022 MercadoLibre S.R.L.
            </Text>
            <Text color="blackAlpha.600" width="fit-content">
              Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
