import { Heading, Stack } from "@chakra-ui/react";
import { Form } from "./form";
import { Header } from "./header";

export function Start() {
  return (
    <Stack
      w={["90%"]}
      display="flex"
      align="center"
      justify="center"
      flexDirection="column"
      margin="0 auto"
      spacing="2rem"
    >
      <Header />
      <Heading fontSize="1rem" color="white.100" w="100%" textAlign="center">
        Insira o nome dos players
      </Heading>
      <Form />
    </Stack>
  );
}
