import React from "react";
import { Container, Stack, Box } from "@chakra-ui/react";
import Nav from "src/app/components/UI/Nav";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" maxW="100%" paddingX={0}>
      <Stack spacing={0}>
        <Nav />
        <Box>
          <Routes />
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
