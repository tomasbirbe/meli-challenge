import { Stack, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  category: string;
  image: string;
}

export default function Category({ category, image }: Props) {
  return (
    <Stack
      bg="white"
      borderRadius="4px"
      boxShadow="lg"
      height="120px"
      minWidth="100px"
      paddingBlock={4}
      paddingInline={4}
    >
      <Box height="48px" margin="auto" width="48px">
        <Image height="48px" src={image} width="48px" />
      </Box>
      <Text fontSize={12} textAlign="center">
        {category}
      </Text>
    </Stack>
  );
}
