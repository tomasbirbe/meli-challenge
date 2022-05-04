import { Stack, Box, Text, Link, Image } from "@chakra-ui/react";
import mercadoCreditoLogo from "assets/mercado-credito-logo.svg";
import visaLogo from "assets/visa-logo.svg";
import americanExpressLogo from "assets/american-express-logo.svg";
import naranjaLogo from "assets/naranja-logo.svg";
import mastercardLogo from "assets/mastercard-logo.svg";
import visaDebitoLogo from "assets/visa-debito-logo.svg";
import pagoFacilLogo from "assets/pago-facil-logo.svg";
import rapipagoLogo from "assets/rapipago-logo.svg";
import mastercardLogo2 from "assets/mastercard-logo-2.svg";
import mastercardDebito from "assets/mastercard-debito-logo.svg";
import cabalLogo from "assets/cabal-logo.svg";
import React from "react";

export default function Refundinfo() {
  return (
    <>
      <Stack
        borderBlockEnd="1px"
        borderBottomColor="blackAlpha.200"
        fontSize="14px"
        paddingBlockEnd={8}
        paddingInline={4}
        spacing={8}
      >
        <Text as="h2" fontSize="18px">
          Devolución gratis
        </Text>
        <Text color="blackAlpha.600">
          Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
        </Text>
        <Link>Conocer más sobre devoluciones</Link>
      </Stack>

      <Stack
        borderBlockEnd="1px"
        borderBottomColor="blackAlpha.200"
        fontSize="14px"
        paddingBlock={6}
        paddingInline={4}
        spacing={6}
      >
        <Text as="h2" fontSize="18px">
          Garantia
        </Text>
        <Stack spacing={1}>
          <Text fontSize="16px">Compra Protegida con Mercado Pago</Text>
          <Text color="blackAlpha.600">
            Recibí el producto que esperabas o te devolvemos tu dinero
          </Text>
        </Stack>
        <Stack spacing={1}>
          <Text fontSize="16px">Garantía del vendedor</Text>
          <Text color="blackAlpha.600">Sin garantía</Text>
        </Stack>
        <Box paddingBlockStart={4}>
          <Link>Conocer más sobre garantia</Link>
        </Box>
      </Stack>

      <Stack
        fontSize="14px"
        paddingBlockEnd={2}
        paddingBlockStart={6}
        paddingInline={4}
        spacing={6}
      >
        <Text as="h2" fontSize="18px">
          Medios de pago
        </Text>
        <Stack spacing={1}>
          <Text fontSize="16px">Hasta 12 cuotas sin tarjeta</Text>
          <Stack>
            <Image height="32px" src={mercadoCreditoLogo} width="73px" />
          </Stack>
        </Stack>
        <Stack spacing={1}>
          <Text fontSize="16px">Tarjetas de crédito</Text>
          <Text color="blackAlpha.600">¡Cuotas sin interés con bancos seleccionados!</Text>
          <Stack direction="row" paddingBlockStart={3} spacing={6}>
            <Image height="32px" src={visaLogo} width="42px" />
            <Image height="32px" src={americanExpressLogo} width="32px" />
            <Image height="32px" src={naranjaLogo} width="63px" />
            <Image height="32px" src={mastercardLogo} width="31px" />
          </Stack>
        </Stack>
        <Stack spacing={1}>
          <Text fontSize="16px">Tarjetas de debito</Text>
          <Stack direction="row" flexWrap="wrap" paddingBlockStart={3} spacing={6}>
            <Image height="32px" src={visaDebitoLogo} width="71px" />
            <Image height="32px" src={mastercardLogo2} width="32px" />
            <Image height="32px" src={mastercardDebito} width="61px" />
            <Image height="32px" src={cabalLogo} width="59px" />
          </Stack>
        </Stack>
        <Stack spacing={1}>
          <Text fontSize="16px">Efectivo</Text>
          <Stack direction="row" flexWrap="wrap" paddingBlockStart={3} spacing={6}>
            <Image height="32px" src={pagoFacilLogo} width="32px" />
            <Image height="32px" src={rapipagoLogo} width="67px" />
          </Stack>
        </Stack>
        <Box paddingBlockStart={4}>
          <Link>Conoce otros medios de pago</Link>
        </Box>
      </Stack>
    </>
  );
}
