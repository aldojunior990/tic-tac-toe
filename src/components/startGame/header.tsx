import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { CgShapeCircle } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export function Header() {
  return (
    <Stack>
      <Flex alignItems="center">
        <Box fontSize="3rem" color="blue.100">
          <IoClose />
        </Box>
        <Box fontSize="3rem" color="yellow.100">
          <CgShapeCircle />
        </Box>
        <Heading
          ml="1rem"
          mr="1rem"
          fontSize="2rem"
          textAlign="center"
          bg="background.50"
          borderRadius="0.5rem"
          padding="0.5rem"
          color="white.100"
        >
          Inicio
        </Heading>

        <Box fontSize="3rem" color="blue.100">
          <IoClose />
        </Box>
        <Box fontSize="3rem" color="yellow.100">
          <CgShapeCircle />
        </Box>
      </Flex>
    </Stack>
  );
}
