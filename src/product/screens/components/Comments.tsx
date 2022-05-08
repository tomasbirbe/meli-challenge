import { Stack, Textarea, Button, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function Comments() {
  return (
    <>
      <Text as="h2" fontSize="24px" paddingBlockStart="40px">
        Preguntas y respuestas
      </Text>
      <Text as="h3" fontSize="18px" fontWeight="bold">
        ¿Que queres saber?
      </Text>
      <Stack color="blue.500" direction="row" spacing={4}>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Costo y tiempo de envio
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Devoluciones gratis
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Medios de pago y promociones
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Garantia
        </Button>
      </Stack>
      <Text fontSize="18px" fontWeight="bold" paddingBlockStart="20px">
        Preguntale al vendedor
      </Text>
      <Stack direction="row">
        <Textarea
          borderColor="gray.400"
          minHeight="48px"
          paddingBlockStart="12px"
          placeholder="Escribi tu respuesta"
          resize="none"
        />
        <Button
          _active={{ bg: "#1f4e96" }}
          _focus={{}}
          _hover={{ bg: "#2968c8" }}
          bg="#3483fa"
          color="white"
          height="48px"
          paddingInline={12}
        >
          Preguntar
        </Button>
      </Stack>
      <Text as="h3" fontSize="18px" fontWeight="bold" paddingBlockStart={4}>
        Ultimas realizadas
      </Text>
      <Stack>
        <Stack align="flex-end" direction="row">
          <Text>Buenas como se llama el local?</Text>
          <Link fontSize="14px">Denunciar</Link>
        </Stack>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text>Buenas como se llama el local?</Text>
        <Stack direction="row" paddingInlineStart={4}>
          <Text color="blackAlpha.400">L</Text>
          <Text color="blackAlpha.600" paddingBlockStart={1}>
            Hola si tenemos stock, somos multiventas az
            <Text
              color="blackAlpha.500"
              display="inline"
              fontSize="14px"
              marginInlineStart={2}
              width="fit-content"
            >
              {new Date().toLocaleDateString()}
            </Text>
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
