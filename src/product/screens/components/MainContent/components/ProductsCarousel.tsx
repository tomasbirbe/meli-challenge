import { Stack, Button, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import type { Product } from "src/product/types";

import ProductCard from "../../ProductCard";

export default function ProductsCarousel({ products }: { products: any[] }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]);
  const [onTransition, setOnTransition] = useState(false);

  useEffect(() => {
    const scrollPages = Math.ceil(products.length / 3);

    for (let i = 0; i < scrollPages; i++) {
      setScrollPositions((scrollPositions) => [...scrollPositions, i * 720]);
    }
  }, []);

  function incrementScrollPosition() {
    if (scrollPosition < scrollPositions.length - 1 && !onTransition) {
      setScrollPosition(scrollPosition + 1);
      setOnTransition(true);
      setTimeout(() => {
        setOnTransition(false);
      }, 450);
    }
  }

  function decrementScrollPosition() {
    if (scrollPosition > 0 && !onTransition) {
      setScrollPosition(scrollPosition - 1);
      setOnTransition(true);
      setTimeout(() => {
        setOnTransition(false);
      }, 450);
    }
  }

  return (
    <>
      <Stack position="relative">
        <Button
          _active={{}}
          _focus={{}}
          _hover={{ boxShadow: "0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%)" }}
          bg="white"
          borderRadius="full"
          boxShadow="0 2px 4px 0 rgb(0 0 0 / 19%)"
          height="64px"
          left="-30px"
          position="absolute"
          top="calc(50% - 20px)"
          visibility={scrollPosition > 0 ? "visible" : "hidden"}
          width="64px"
          zIndex={1}
          onClick={decrementScrollPosition}
        >
          <Icon as={MdArrowBackIos} boxSize={6} color="blue.500" marginInlineStart={2} />
        </Button>
        <Stack direction="row" overflow="hidden" width="full">
          <Stack
            direction="row"
            spacing={0}
            transform={`translateX(-${scrollPositions[scrollPosition]}px)`}
            transition="400ms all ease"
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
          _active={{}}
          _focus={{}}
          _hover={{ boxShadow: "0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%)" }}
          bg="white"
          borderRadius="full"
          boxShadow="0 2px 4px 0 rgb(0 0 0 / 19%)"
          height="64px"
          position="absolute"
          right="-35px"
          top="calc(50% - 20px)"
          visibility={scrollPosition < scrollPositions.length - 1 ? "visible" : "hidden"}
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
