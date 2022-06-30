import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CgShapeCircle } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { PlayerContext } from "../../hooks/playerContext";
import { AiOutlineReload } from "react-icons/ai";

type Players = "X" | "O";

export function Board() {
  const [turn, setTurn] = useState<Players>("O");
  const [mark, setMark] = useState<{ [key: string]: Players }>({});

  const [pointsP1, setPointsP1] = useState(0);
  const [pointsP2, setPointsP2] = useState(0);
  const [pointsTie, setPointsTie] = useState(0);

  const [tie, setTie] = useState<boolean | null>(null);

  const { players, setWinner, setGame } = useContext(PlayerContext);

  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const play = (index: number) => {
    if (mark[index] !== undefined) return;
    setMark((prev) => ({ ...prev, [index]: turn }));
    getPlayer(index);

    setTurn((prev) => (prev === "O" ? "X" : "O"));
    setCurrentIndex(index);
  };

  const getPlayer = (index: number) => {
    if (!mark[index]) return;
    if (mark[index] == "X") return true;
    if (mark[index] === "O") return false;
  };

  const getWinner = () => {
    const victory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (const l of victory) {
      const [a, b, c] = l;
      if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
        return mark[a];
      }
    }
  };

  const handleReset = () => {
    setTurn("O");
    setMark({});
  };

  useEffect(() => {
    const win = getWinner();

    if (win) {
      if (win === "O") {
        setWinner(players.player1);
        setPointsP1(pointsP1 + 1);
        handleReset();
      }
      if (win === "X") {
        setWinner(players.player2);
        setPointsP2(pointsP2 + 1);
        handleReset();
      }
    } else {
      if (Object.keys(mark).length === 9) {
        setTie(true);
        setPointsTie(pointsTie + 1);
        handleReset();
      }
    }
  }, [mark]);

  const layerStyle = getPlayer(currentIndex) ? "baseX" : "baseO";

  return (
    <>
      <Flex justifyContent="space-between" align="center" w={["17rem", "100%"]}>
        <Flex justifyContent="center">
          <Box fontSize="3rem" color="blue.100">
            <IoClose />
          </Box>
          <Box fontSize="3rem" color="yellow.100">
            <CgShapeCircle />
          </Box>
        </Flex>
        <Button
          rightIcon={<IoClose />}
          bg="background.50"
          color="white.100"
          _hover={{
            bg: "red.100",
          }}
          onClick={() => setGame(false)}
        >
          finalizar
        </Button>

        <Button
          bg="background.50"
          color="white.100"
          _hover={{
            bg: "green.100",
          }}
          onClick={() => handleReset()}
        >
          <AiOutlineReload />
        </Button>
      </Flex>
      <Grid
        margin="0 auto"
        mt="2rem"
        templateColumns="1fr 1fr 1fr"
        gridGap="0.5rem"
      >
        {Array.from({ length: 9 }).map((_, i) => {
          return (
            <Button
              margin="0 auto"
              borderRadius="0.5rem"
              w={["5.2rem", "8.5rem", "10rem", "10rem", "10rem"]}
              h={["5.2rem", "8.5rem", "10rem", "10rem", "10rem"]}
              bg="background.50"
              layerStyle={layerStyle}
              _hover={{
                bg: "background.50",
              }}
              color="white.100"
              key={i}
              onClick={() => play(i)}
            >
              {mark[i]}
            </Button>
          );
        })}
      </Grid>

      <Grid templateColumns="1fr 1fr 1fr" gridGap="0.5rem">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white.100"
          bg="yellow.100"
          w={["5.2rem", "8.5rem", "10rem", "10rem", "10rem"]}
          borderRadius="0.5rem"
          mt="1rem"
        >
          <Heading mt="1rem" fontSize="1rem">
            {players.player1}
          </Heading>
          <Text mt="0.5rem" mb="1rem" fontSize="1.2rem">
            {pointsP1}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white.100"
          bg="red.100"
          w={["5.2rem", "8.5rem", "10rem", "10rem", "10rem"]}
          borderRadius="0.5rem"
          mt="1rem"
        >
          <Heading mt="1rem" fontSize="1rem">
            empates
          </Heading>
          <Text mt="0.5rem" mb="1rem" fontSize="1.2rem">
            {pointsTie}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white.100"
          bg="blue.100"
          w={["5.2rem", "8.5rem", "10rem", "10rem", "10rem"]}
          borderRadius="0.5rem"
          mt="1rem"
        >
          <Heading mt="1rem" fontSize="1rem">
            {players.player2}
          </Heading>
          <Text mt="0.5rem" mb="1rem" fontSize="1.2rem">
            {pointsP2}
          </Text>
        </Box>
      </Grid>
    </>
  );
}
