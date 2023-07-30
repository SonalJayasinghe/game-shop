import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

function GenreList() {
  const { data} = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY = '5px' >
          <HStack> 
            <Image boxSize='32px' borderRadius={8} src = { getCropedImageUrl(genre.image_background)} />
            <text fontSize= 'lg' > {genre.name} </text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
