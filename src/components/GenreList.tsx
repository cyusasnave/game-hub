import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const { genreId, setGenreId } = useGameQueryStore((s) => ({
    genreId: s.gameQuery.genreId,
    setGenreId: s.setGenreId,
  }));

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data &&
          data.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={"8px"}
                  objectFit={"cover"}
                  src={getCroppedUrl(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={genre.id === genreId ? "bold" : "normal"}
                  onClick={() => setGenreId(genre.id)}
                  fontSize={"lg"}
                  variant={"link"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
