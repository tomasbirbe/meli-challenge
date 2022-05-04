import React from "react";
import { Link, Stack, Text } from "@chakra-ui/react";
import Description from "src/product/screens/components/Description";
import Attributes from "src/product/screens/components/Attributes";
import ProductsCarousel from "src/product/screens/components/OtherProducts";
import Gallery from "src/product/screens/components/Gallery";
import Comments from "src/product/screens/components/Comments";
import PucharseInfo from "src/product/screens/components/PucharseInfo";
import SellerInfo from "src/product/screens/components/SellerInfo";
import RefundInfo from "src/product/screens/components/RefundInfo";
import PromotedProducts from "src/product/screens/components/PromotedProducts";
import MercadoShop from "src/product/screens/components/MercadoShop";

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

      <Stack
        bg="white"
        borderRadius="4px"
        boxShadow="base"
        direction="row"
        paddingBlockEnd="60px"
        paddingBlockStart={4}
      >
        <Stack as="main" spacing={0} width="768px">
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
            <RefundInfo />
          </Stack>
          <Stack
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="8px"
            paddingBlock={6}
            paddingInline={0}
            spacing={2}
          >
            <PromotedProducts />
          </Stack>

          <MercadoShop />
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
