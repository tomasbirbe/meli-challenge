import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Product from "src/app/components/UI/Product";
import Category from "src/app/components/UI/Category";
import allForSales from "assets/categories/all-for-sales.webp";
import beds from "assets/categories/beds.webp";
import below2000 from "assets/categories/below2000.webp";
import bicycles from "assets/categories/bicycles.webp";
import books from "assets/categories/books.webp";
import clothes from "assets/categories/clothes.webp";
import fitness from "assets/categories/fitness.webp";
import gaming from "assets/categories/gaming.webp";
import headsets from "assets/categories/headsets.webp";
import heaters from "assets/categories/heaters.webp";
import lightingForSales from "assets/categories/lightingForSales.webp";
import notebooks from "assets/categories/notebooks.webp";
import shoes from "assets/categories/shoes.webp";
import smartphones from "assets/categories/smartphones.webp";
import speakers from "assets/categories/speakers.webp";
import supermarket from "assets/categories/supermarket.webp";
import tools from "assets/categories/tools.webp";
import tvs from "assets/categories/tvs.webp";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function HomeScreen() {
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
        <Category category="Todas las ofertas" image={allForSales} />
        <Category category="Ofertas relampago" image={lightingForSales} />
        <Category category="Celulares" image={smartphones} />
        <Category category="Notebooks" image={notebooks} />
        <Category category="Herramientas" image={tools} />
        <Category category="Menos de $2000" image={below2000} />
        <Category category="Supermercado" image={supermarket} />
        <Category category="Zapatillas" image={shoes} />
        <Category category="Auriculares" image={headsets} />
        <Category category="Televisiones" image={tvs} />
        <Category category="Bicicletas" image={bicycles} />
        <Category category="Colchones" image={beds} />
        <Category category="Parlantes" image={speakers} />
        <Category category="Calefacción" image={heaters} />
        <Category category="Videojuegos" image={gaming} />
        <Category category="Deportes y fitness" image={fitness} />
        <Category category="Libros" image={books} />
        <Category category="Moda" image={clothes} />
      </Stack>

      <Stack direction="row" spacing={0} width="full" wrap="wrap">
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
        <Product
          description="Consola Retro Portatil Multiplataformas X7"
          discount={5}
          freeShip={true}
          image=""
          installments={6}
          isFullShip={true}
          offerOfDay={true}
          prevPrice={9000}
          priceToBuy={8169}
        />
      </Stack>
    </>
  );
}
