import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import type { Product } from "src/product/types";

import Gallery from "./components/Gallery";
import Attributes from "./components/Attributes";
import Comments from "./components/Comments";
import ProductsCarousel from "./components/ProductsCarousel";
import Description from "./components/Description";

export function MainContent({ product }: { product: Product }) {
  return (
    <>
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
          <Stack borderBlockEnd="1px" borderColor="blackAlpha.200" paddingBlock="40px" spacing={5}>
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
    </>
  );
}
