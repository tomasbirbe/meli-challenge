import { Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Product from "src/app/components/Product";
import type { Category as CategoryType } from "src/app/types";
import Category from "src/app/components/Category";
import { api } from "src/app/services/api";
import apiProducts from "src/product/mock";
import { Product as ProductType } from "src/product/types";

export default function HomeScreen() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    setProducts([apiProducts.product]);
    api
      .getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Stack
        align="center"
        direction="row"
        height="45px"
        justify="space-between"
        paddingInline={4}
        spacing={0}
        width="full"
      >
        <Text color="blackAlpha.500">10.000 productos</Text>
        <Stack
          align="center"
          as="button"
          color="secondary.400"
          direction="row"
          display="flex"
          justify="center"
          minHeight="26px"
          spacing={0}
        >
          <Text fontSize={14}>Filtrar (1)</Text>
          <Icon alignSelf="flex-end" as={MdKeyboardArrowDown} boxSize={6} />
        </Stack>
      </Stack>

      <Stack
        bg="gray.100"
        boxShadow="innerLg"
        direction="row"
        overflowX="auto"
        paddingBlock={4}
        paddingInline={6}
      >
        {categories.length ? (
          categories.map((category) => (
            <Category
              key={category.id}
              category={category.description}
              imageUrl={category.imageUrl}
            />
          ))
        ) : (
          <Text>Cargando...</Text>
        )}
      </Stack>

      <Stack direction="row" spacing={0} width="full" wrap="wrap">
        {products?.map((product) => (
          <Product
            key={product.id}
            basePrice={product.basePrice}
            image={product.pictures[0].url}
            installments={0}
            isFullShip={false}
            offerOfDay={false}
            price={product.price}
            title={product.title}
          />
        ))}
      </Stack>
    </>
  );
}
