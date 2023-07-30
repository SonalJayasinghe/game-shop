import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery{
  genre: Genre | null,
  platform: Platform | null;
}

export default function App() {

   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav"  "main"`,
      lg: `"nav nav" "aside  main"` //lg - larger device over 1024px
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}>
                            
    <GridItem area="nav"> 
    <NavBar/>
     </GridItem>

    <Show above="lg">
    <GridItem area="aside" paddingX='20px'> 
      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}></GenreList>
     </GridItem>
    </Show>

    <GridItem area="main"> 
    <HStack paddingX={9}> 
      <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
      <SortSelector/>
    </HStack>
      <GameGrid gameQuery={gameQuery}/>
     </GridItem>
    </Grid>
  );
}

