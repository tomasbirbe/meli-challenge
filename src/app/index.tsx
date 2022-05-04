import React from "react";
import { Container, Stack, Box } from "@chakra-ui/react";
import Nav from "src/app/components/UI/Nav";
import Footer from "src/app/components/Footer";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" bg="gray.200" maxW="100%" paddingX={0}>
      <Stack align="center" spacing={0}>
        <Nav />
        <Box maxWidth="1184px" width="full">
          <Routes />
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
};

export default App;
