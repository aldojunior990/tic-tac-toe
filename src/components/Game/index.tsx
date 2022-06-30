import { Container, Stack } from "@chakra-ui/react";

import { Board } from "./board";

export function Game() {
  return (
    <Stack
      w="70rem"
      display="flex"
      align="center"
      justify="center"
      flexDirection="column"
      margin="0 auto"
      spacing="2rem"
    >
      <Container
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w={["95%", "95%", "35rem"]}
      >
        <Board />
      </Container>
    </Stack>
  );
}
