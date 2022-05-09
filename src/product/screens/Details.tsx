import React, { useState } from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import Description from "src/product/screens/components/Description";
import Attributes from "src/product/screens/components/Attributes";
import ProductsCarousel from "src/product/screens/components/ProductsCarousel";
import Gallery from "src/product/screens/components/Gallery";
import Comments from "src/product/screens/components/Comments";
import PucharseInfo from "src/";
import SellerInfo from "src/";
import RefundInfo from "src/";
import PromotedProducts from "src/";
import MercadoShop from "src/";

import { Product } from "../types";
import mock from "../mock";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
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

      <Stack
        bg="white"
        borderRadius="4px"
        boxShadow="base"
        direction="row"
        paddingBlockEnd="60px"
        paddingBlockStart={4}
        spacing={0}
      >
        <Stack as="main" spacing={0} width="768px">
          <Gallery product={product} />
          <Stack paddingInlineStart="50px">
            <Stack borderBlock="1px" borderColor="blackAlpha.200" paddingBlock="40px" spacing={5}>
              <Text as="h2" fontSize="24px" fontWeight={400}>
                Publicaciones del vendedor
              </Text>
              <ProductsCarousel
                products={[
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                  {
                    description:
                      "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf",
                    img:
                      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
                    price: 1500,
                  },
                ]}
              />
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
        <Box as="aside" position="relative">
          <Stack
            paddingInlineEnd={4}
            paddingInlineStart={12}
            position="sticky"
            spacing={4}
            top="15px"
          >
            <PucharseInfo product={product} />
            <Stack
              border="1px"
              borderColor="blackAlpha.300"
              borderRadius="8px"
              paddingBlock={6}
              paddingInline={4}
              spacing={2}
            >
              <SellerInfo />
            </Stack>
            <Stack
              border="1px"
              borderColor="blackAlpha.300"
              borderRadius="8px"
              paddingBlock={6}
              paddingInline={0}
              spacing={2}
            >
              <RefundInfo />
            </Stack>
            <Stack
              border="1px"
              borderColor="blackAlpha.300"
              borderRadius="8px"
              paddingBlockEnd={10}
              paddingBlockStart={6}
              paddingInline={0}
              spacing={2}
            >
              <PromotedProducts />
            </Stack>

            <MercadoShop />
          </Stack>
        </Box>
      </Stack>

      <Stack direction="row" justify="flex-end" paddingBlock={4}>
        <Text fontSize={14}>
          Publicacion <b>#1114686147</b>
        </Text>
        <Text fontSize={14}>|</Text>
        <Link fontSize={14}>Denunciar</Link>
      </Stack>
    </>
  );
};

export default DetailsScreen;
