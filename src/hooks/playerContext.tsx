import { createContext, ReactNode, useState } from "react";

interface PlayerProviderProps {
  children: ReactNode;
}

interface Player {
  player1: string;
  player2: string;
}

type Players = "X" | "O";

interface PlayerContext {
  players: Player;
  setPlayers: (prevState: Player) => void;
  game: boolean;
  setGame: (prevState: boolean) => void;
  winner: string | null;
  setWinner: (prevState: string | null) => void;
}

export const PlayerContext = createContext({} as PlayerContext);

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [game, setGame] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  const [players, setPlayers] = useState<Player>({
    player1: "player1",
    player2: "player2",
  });

  console.log(players);

  const states = {};

  return (
    <PlayerContext.Provider
      value={{
        players,
        setPlayers,
        game,
        setGame,
        winner,
        setWinner,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
