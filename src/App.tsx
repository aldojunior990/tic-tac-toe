import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Game } from "./components/Game";
import { Start } from "./components/startGame";
import { PlayerContext } from "./hooks/playerContext";

function App() {
  const { game } = useContext(PlayerContext);
  return (
    <Flex w="100vw" height="100vh" alignItems="center" justifyContent="center">
      {!game && <Start />}
      {game && <Game />}
    </Flex>
  );
}

export default App;
