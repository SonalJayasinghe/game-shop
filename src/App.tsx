import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export default function App() {
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
      <GenreList></GenreList>
     </GridItem>
    </Show>

    <GridItem area="main"> 
      <GameGrid/>
     </GridItem>
    </Grid>
  );
}

