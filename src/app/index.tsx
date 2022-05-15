import React from "react";
import { Container, Stack, Box } from "@chakra-ui/react";

import PersonalLinks from "./components/PersonalLinks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" bg="gray.200" maxW="100%" paddingX={0}>
      <Stack align="center" position="relative" spacing={0}>
        <PersonalLinks />
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
