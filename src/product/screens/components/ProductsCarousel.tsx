import { Stack, Button, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import type { Product } from "src/product/types";

import ProductCard from "./ProductCard";

export default function ProductsCarousel({ products }: { products: any[] }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);

  useEffect(() => {
    const scrollPages = Math.ceil(products.length / 3);

    for (let i = 0; i < scrollPages; i++) {
      setScrollPositions((scrollPositions) => [...scrollPositions, i * 678]);
    }
  }, []);

  // useEffect(() => {
  //   console.log(scrollPositions.length);
  //   console.log(scrollPosition);
  // }, [scrollPositions, scrollPositions]);

  function incrementScrollPosition() {
    if (scrollPosition < scrollPositions.length - 1) {
      setScrollPosition(scrollPosition + 1);
    } else {
      setScrollPosition(0);
    }
  }

  function decrementScrollPosition() {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    } else {
      setScrollPosition(scrollPositions.length - 1);
    }
  }

  return (
    <>
      <Stack position="relative">
        <Button
          bg="white"
          borderRadius="full"
          boxShadow="base"
          height="64px"
          left="-15px"
          position="absolute"
          top="calc(50% - 20px)"
          width="64px"
          zIndex={1}
          onClick={decrementScrollPosition}
        >
          <Icon as={MdArrowBackIos} boxSize={6} color="blue.500" marginInlineStart={2} />
        </Button>
        <Stack direction="row" overflow="hidden" paddingInline={1} spacing={3} width="full">
          <Stack
            direction="row"
            transform={`translateX(-${scrollPositions[scrollPosition]}px)`}
            transition="500ms all ease"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                description={product.description}
                image={product.img}
                price={product.price}
              />
            ))}
          </Stack>
        </Stack>
        <Button
          bg="white"
          borderRadius="full"
          boxShadow="base"
          height="64px"
          position="absolute"
          right="-30px"
          top="calc(50% - 20px)"
          width="64px"
          zIndex={1}
          onClick={incrementScrollPosition}
        >
          <Icon as={MdArrowForwardIos} boxSize={6} color="blue.500" />
        </Button>
      </Stack>
    </>
  );
}
