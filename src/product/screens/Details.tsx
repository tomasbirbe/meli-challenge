import React from "react";
import { Box, Button, Icon, Image, Img, Link, Stack, Text } from "@chakra-ui/react";
import Description from "src/product/screens/components/Description";
import Attributes from "src/product/screens/components/Attributes";
import ProductsCarousel from "src/product/screens/components/OtherProducts";
import Gallery from "src/product/screens/components/Gallery";
import Comments from "src/product/screens/components/Comments";
import PucharseInfo from "src/product/screens/components/PucharseInfo";
import SellerInfo from "src/product/screens/components/SellerInfo";
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

import { Product } from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <>
      <Stack marginBlockEnd={2} paddingBlockStart={7} spacing={5}>
        <Text fontSize="14px">
          <b>También puede interesarte:</b> peluches gigantes - encanto disney - peluche - unicornio
        </Text>
        <Stack direction="row" spacing={3}>
          <Text fontSize="14px">Volver al listado</Text>
          <Text color="blackAlpha.500"> | </Text>
          <Text fontSize="14px">
            <Link>Juegos y juguetes</Link> {">"} <Link>Peluches</Link> {">"}
            <Link>Stitch</Link>
          </Text>
        </Stack>
      </Stack>

      <Stack bg="white" borderRadius="4px" boxShadow="base" direction="row" paddingBlockStart={4}>
        <Stack as="main" justify="flex-end" paddingBlockEnd="25px" spacing={0} width="768px">
          <Gallery product={product} />
          <Stack paddingInlineStart="50px">
            <Stack borderBlock="1px" borderColor="blackAlpha.200" paddingBlock="40px" spacing={5}>
              <Text as="h2" fontSize="24px" fontWeight={400}>
                Publicaciones del vendedor
              </Text>
              <ProductsCarousel />
              <Link color="blue.600" fontSize={14}>
                Ver más publicaciones del vendedor
              </Link>
            </Stack>
            <Stack
              borderBlockEnd="1px"
              borderColor="blackAlpha.200"
              paddingBlock="40px"
              spacing={5}
            >
              <Attributes product={product} />
            </Stack>
            <Stack paddingBlockStart="40px">
              <Description />
            </Stack>
            <Stack spacing={6}>
              <Comments />
              <Text color="blue.500" fontSize="14px">
                Ver todas las preguntas
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack as="aside" paddingInlineEnd={4} paddingInlineStart={10} spacing={4} width="100%">
          <PucharseInfo product={product} />
          <Stack
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={4}
            spacing={2}
          >
            <SellerInfo />
          </Stack>
          <Stack
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={0}
            spacing={2}
          >
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
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" justify="flex-end" paddingBlock={4}>
        <Text fontSize={14}>
          Publicacion <b>#1114686147</b>
        </Text>
        <Text fontSize={14}>|</Text>
        <Link fontSize={14}>Denunciar</Link>
      </Stack>

      <Stack spacing={6}>
        <Text as="h2" fontSize="24px">
          Productos promocionados
          <Link fontSize="16px" paddingInlineStart={2}>
            Anuncia aqui
          </Link>
        </Text>
        <Stack width="full">
          <ProductsCarousel />
        </Stack>
      </Stack>

      <Stack paddingBlock="40px" spacing={6}>
        <Text as="h2" fontSize="24px">
          Quienes vieron este producto también compraron
        </Text>
        <Stack width="full">
          <ProductsCarousel />
        </Stack>
      </Stack>

      <Stack paddingBlock="40px" spacing={6}>
        <Text as="h2" fontSize="24px">
          Quienes compraron este producto también compraron
        </Text>
        <Stack width="full">
          <ProductsCarousel />
        </Stack>
      </Stack>
    </>
  );
};

export default DetailsScreen;
