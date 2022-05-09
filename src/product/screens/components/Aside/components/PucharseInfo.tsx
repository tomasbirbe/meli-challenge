import { Stack, Button, Icon, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiRedo, BiCheckShield } from "react-icons/bi";
import { BsHeart, BsTruck } from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Product } from "src/product/types";

export default function PucharseInfo({ product }: { product: Product }) {
  return (
    <>
      <Stack
        border="1px"
        borderColor="blackAlpha.300"
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
              <Text>Solo en CABA y zonas de GBA Comprando dentro de las próximas 5 h 39 min</Text>
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
          <Stack paddingBlockStart={5}>
            <Button bg="blue.500" color="white" paddingBlock={6}>
              Comprar ahora
            </Button>
            <Button bg="blue.50" color="blue.500" paddingBlock={6}>
              Agregar al carrito
            </Button>
          </Stack>
          <Stack fontSize="14px" spacing={4}>
            <Stack direction="row">
              <Icon
                as={BiCheckShield}
                boxSize="18px"
                color="blackAlpha.600"
                marginBlockStart={0.5}
              />
              <Text>
                <Link>Compra protegida</Link>, recibí el producto que esperabas o te devolvemos tu
                dinero.
              </Text>
            </Stack>
            <Stack direction="row">
              <Icon
                as={AiOutlineTrophy}
                boxSize="18px"
                color="blackAlpha.600"
                marginBlockStart={0.5}
              />
              <Text>
                <Link>Mercado puntos</Link>. Sumás 52 puntos.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
