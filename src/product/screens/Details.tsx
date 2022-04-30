import React from "react";
import { Box, Button, Icon, Link, Stack, Text } from "@chakra-ui/react";
import Description from "src/product/screens/components/Description";
import Attributes from "src/product/screens/components/Attributes";
import ProductsCarousel from "src/product/screens/components/OtherProducts";
import Gallery from "src/product/screens/components/Gallery";
import Comments from "src/product/screens/components/Comments";
import { BsHeart, BsTruck } from "react-icons/bs";
import { BiRedo } from "react-icons/bi";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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
        <Stack paddingInlineEnd={4} paddingInlineStart={10} width="100%">
          <Stack
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={4}
            spacing={2}
          >
            <Stack color="blackAlpha.700" direction="row" fontSize="14px">
              <Text>Nuevo</Text>
              <Text>|</Text>
              <Text> 121 vendidos</Text>
            </Stack>
            <Stack direction="row" justify="space-between" spacing={2} width="full">
              <Text fontSize="22px" fontWeight="600" lineHeight={1.18}>
                {product.title}
              </Text>
              <Button height="fit-content" minWidth="28px" variant="unstyled" width="fit-content">
                <Icon alignSelf="flex-end" as={BsHeart} boxSize={5} color="blue.500" />
              </Button>
            </Stack>
            <Stack align="center" direction="row" justifySelf="flex-start">
              <Stack color="blue.500" direction="row" spacing={1}>
                <Icon as={FaStar} height="14px" width="15px" />
                <Icon as={FaStar} height="14px" width="15px" />
                <Icon as={FaStar} height="14px" width="15px" />
                <Icon as={FaStar} height="14px" width="15px" />
                <Icon as={FaStarHalf} height="14px" width="15px" />
              </Stack>
              <Text color="blackAlpha.600" fontSize="14px">
                59 opiniones
              </Text>
            </Stack>
            <Stack direction="row">
              <Text
                bg="orange.500"
                borderRadius="3px"
                color="white"
                fontSize="12px"
                fontWeight="600"
                paddingInline={1}
              >
                MAS VENDIDO
              </Text>
              <Link color="blue.500" fontSize="12px">
                10° en Peluches
              </Link>
            </Stack>
            <Stack>
              <Text fontSize="36px" fontWeight={300}>
                $ {product.price}
              </Text>
              <Text fontSize="18px">
                En 12x de $211
                <Text bottom="4.5px" display="inline" fontSize="10px" position="relative">
                  50&nbsp;
                </Text>
                pagando con Mercado Credito
              </Text>
              <Link fontSize="14px">Ver los medios de pago</Link>
              <Stack direction="row" spacing={3}>
                <Icon as={BsTruck} boxSize={6} color="green.400" />
                <Stack fontSize="14px" spacing={0}>
                  <Text color="green.400" fontSize="16px">
                    Llega gratis <b>hoy Sabado</b>
                  </Text>
                  <Text>
                    Solo en CABA y zonas de GBA Comprando dentro de las próximas 5 h 39 min
                  </Text>
                  <Link>Ver mas formas de entrega</Link>
                </Stack>
              </Stack>
              <Stack direction="row">
                <Icon as={BiRedo} boxSize={7} color="green.400" transform="rotate(0.5turn)" />
                <Stack fontSize="14px" spacing={0}>
                  <Text color="green.400" fontSize="16px">
                    Devolucion gratis
                  </Text>
                  <Text>Tenés 30 días desde que lo recibís </Text>
                  <Link>Conocer mas</Link>
                </Stack>
              </Stack>
              <Stack paddingBlockStart={6} spacing={6}>
                <Text fontWeight={600}>Stock disponible</Text>
                <Button
                  alignItems="center"
                  display="flex"
                  sx={{ gap: "3px" }}
                  variant="unstyled"
                  width="fit-content"
                >
                  <Text>
                    Cantidad: <b>1 Unidad</b>
                  </Text>
                  <Box height="17px" minWidth="9px" variant="unstyled">
                    <Icon as={IoIosArrowDown} color="blue.500" marginBlockEnd={2} />
                  </Box>
                  <Text color="blackAlpha.500" fontSize="14px">
                    (8 disponibles)
                  </Text>
                </Button>
              </Stack>
              <Stack>
                <Button bg="blue.500" color="white" paddingBlock={6}>
                  Comprar ahora
                </Button>
                <Button bg="blue.50" color="blue.500" paddingBlock={6}>
                  Agregar al carrito
                </Button>
              </Stack>
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
