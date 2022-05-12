import { Stack, Link, Text } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <>
      <Stack marginBlockEnd={2} paddingBlockStart={5} spacing={5}>
        <Text fontSize="14px">
          <b>También puede interesarte:</b> peluches gigantes - encanto disney - peluche - unicornio
        </Text>
        <Stack direction="row" justify="space-between">
          <Stack direction="row" spacing={3}>
            <Text fontSize="14px">Volver al listado</Text>
            <Text color="blackAlpha.500"> | </Text>
            <Text fontSize="14px">
              <Link>Juegos y juguetes</Link> {">"} <Link>Peluches</Link> {">"}
              <Link>Stitch</Link>
            </Text>
          </Stack>
          <Stack align="center" direction="row" fontSize="14px" spacing={3}>
            <Link>Compartir</Link>
            <Text color="blackAlpha.400" fontSize="16px">
              |
            </Text>
            <Link>Vender uno igual</Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
