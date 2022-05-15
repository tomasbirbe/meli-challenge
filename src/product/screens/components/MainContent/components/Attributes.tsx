import { TableContainer, Table, Tbody, Tr, Th, Td, Stack, Text } from "@chakra-ui/react";
import React from "react";
import type { Product } from "src/product/types";

export default function Attributes({ product }: { product: Product }) {
  return (
    <Stack borderBlockEnd="1px" borderColor="blackAlpha.200" paddingBlock="40px" spacing={5}>
      <Text as="h2" fontSize="24px" fontWeight={400}>
        Caracteristicas principales
      </Text>
      <TableContainer>
        <Table>
          <Tbody>
            {product.attributes.map(
              (attribute: {
                name: string;
                id: string;
                attribute_group_id: string;
                values: { name: string }[];
              }) => {
                if (attribute.attribute_group_id !== "OTHERS") {
                  return (
                    <Tr key={attribute.id}>
                      <Th width="30%">{attribute.name}</Th>
                      <Td>{attribute.values[0].name}</Td>
                    </Tr>
                  );
                }
              },
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Text as="h3" fontSize="20px">
        Otras caracteristicas
      </Text>
      <Stack>
        {product.attributes.map(
          (attribute: {
            name: string;
            id: string;
            attribute_group_id: string;
            values: { name: string }[];
          }) => {
            if (attribute.attribute_group_id === "OTHERS") {
              return (
                <Text key={attribute.id}>
                  <b>{attribute.name}:</b> {attribute.values[0].name}
                </Text>
              );
            }
          },
        )}
      </Stack>
    </Stack>
  );
}
