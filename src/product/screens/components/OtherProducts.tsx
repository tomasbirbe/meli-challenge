import { Stack, Button, Box, Text, Link, Icon } from "@chakra-ui/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import ProductCard from "./ProductCard";

export default function ProductsCarousel({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Stack position="relative">
        <Stack direction="row" overflow="hidden" paddingInline={1} spacing={3} width="full">
          <Button
            bg="white"
            borderRadius="full"
            boxShadow="base"
            height="64px"
            left="-15px"
            position="absolute"
            top="calc(50% - 20px)"
            width="64px"
          >
            <Icon as={MdArrowBackIos} boxSize={6} color="blue.500" marginInlineStart={2} />
          </Button>
          <ProductCard
            description={
              "Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermososadsfasdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdffasdfasdfasdf"
            }
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          <ProductCard
            description={"Peluche Stitch O Angel 45cm Importado Lilo Y Stitch Hermosos"}
            image={
              "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"
            }
            price={1500}
          />
          {children}

          <Button
            bg="white"
            borderRadius="full"
            boxShadow="base"
            height="64px"
            position="absolute"
            right="-30px"
            top="calc(50% - 20px)"
            width="64px"
          >
            <Icon as={MdArrowForwardIos} boxSize={6} color="blue.500" />
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
