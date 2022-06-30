import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { FormEvent, useContext, useState } from "react";
import { PlayerContext } from "../../hooks/playerContext";

export function Form() {
  const { setPlayers, setGame } = useContext(PlayerContext);
  const [P1, setP1] = useState<string>("");
  const [P2, setP2] = useState<string>("");

  function handleNewGame(e: FormEvent) {
    e.preventDefault();

    if (P1 === "" && P2 === "")
      setPlayers({ player1: "player1", player2: "player2" });
    else if (P1 === "" && P2 != "")
      setPlayers({ player1: "player1", player2: `${P2}` });
    else if (P1 != "" && P2 === "")
      setPlayers({ player1: `${P1}`, player2: "player2" });
    else setPlayers({ player1: `${P1}`, player2: `${P2}` });

    setGame(true);
  }

  return (
    <Stack mt="2rem">
      <form onSubmit={handleNewGame}>
        <FormLabel color="white.300">Player 1:</FormLabel>
        <Input
          id="P1"
          name="P1"
          value={P1}
          onChange={(e) => setP1(e.target.value)}
          color="white.100"
        />
        <FormLabel mt="1rem" color="white.300">
          Player 2:
        </FormLabel>
        <Input
          id="P2"
          name="P2"
          color="white.100"
          value={P2}
          onChange={(e) => setP2(e.target.value)}
        />

        <Button bg="green.100" w="100%" mt="2rem" type="submit">
          Start
        </Button>
      </form>
    </Stack>
  );
}
