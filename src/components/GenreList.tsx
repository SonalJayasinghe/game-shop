import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

function GenreList({onSelectGenre, selectedGenre} : Props) {
  const { data, isLoading, error} = useGenres();
    if(isLoading) return <Spinner/>
    if(error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY = '5px' >
          <HStack> 
            <Image boxSize='32px' borderRadius={8} src = { getCropedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : "normal"} fontSize= 'lg' variant='link' onClick={() => onSelectGenre(genre)}> {genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
